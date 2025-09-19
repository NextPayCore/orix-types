import type { AxiosError, AxiosInstance, AxiosProgressEvent, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

// Interfaces để inject dependencies
export interface ITokenProvider {
  getToken(): string | undefined;
}

export interface ILoadingManager {
  setLoading(loading: boolean): void;
}

export interface IAuthManager {
  clearAuth(): void;
  redirectToLogin(currentPath?: string): void;
}

export interface IResponseWithAbort<T> {
  request: Promise<AxiosResponse<T>>;
  cancel: () => void;
}

export interface ApiBaseConfig {
  baseUrl: string;
  isStandard?: boolean;
  timeout?: number;
  clientVersion?: string;
  loginPath?: string;
}

export interface ApiBaseDependencies {
  tokenProvider?: ITokenProvider;
  loadingManager?: ILoadingManager;
  authManager?: IAuthManager;
}

export class ApiBase {
  private readonly instance: AxiosInstance;
  private readonly config: Required<ApiBaseConfig>;
  private readonly dependencies: ApiBaseDependencies;

  constructor(config: ApiBaseConfig, dependencies: ApiBaseDependencies = {}) {
    this.config = {
      baseUrl: config.baseUrl,
      isStandard: config.isStandard ?? false,
      timeout: config.timeout ?? 60000,
      clientVersion: config.clientVersion ?? 'webapp-v1.0.0',
      loginPath: config.loginPath ?? '/login'
    };

    this.dependencies = dependencies;

    this.instance = axios.create({
      baseURL: this.config.baseUrl,
      method: 'get',
      timeout: this.config.timeout,
      responseEncoding: 'utf8',
      headers: { client: this.config.clientVersion }
    });

    this.setupRequestInterceptors();
    if (this.config.isStandard) {
      this.setupStandardResponseInterceptors();
    } else {
      this.setupNoStandardResponseInterceptors();
    }
  }

  private setupRequestInterceptors() {
    this.instance.defaults.headers.post['Content-Type'] = 'application/json';

    this.instance.interceptors.request.use(
      (config) => {
        const headers = config.headers;
        if (headers) {
          headers['cache-control'] = 'no-cache, no-store, no-transform';
          
          // Use injected token provider
          const token = this.dependencies?.tokenProvider?.getToken();
          if (token && !headers.Authorization) {
            headers.Authorization = `Bearer ${token.replace('Bearer ', '')}`;
          }
        }
        
        // Use injected loading manager
        this.dependencies?.loadingManager?.setLoading(true);
        return config;
      },
      (error) => {
        this.dependencies?.loadingManager?.setLoading(false);
        return Promise.reject(error);
      }
    );
  }

  private setupStandardResponseInterceptors() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.dependencies?.loadingManager?.setLoading(false);
        return response;
      },
      (error: AxiosError) => {
        this.dependencies?.loadingManager?.setLoading(false);
        this.handleAuthError(error);
        return Promise.reject(error);
      }
    );
  }

  private setupNoStandardResponseInterceptors() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.dependencies?.loadingManager?.setLoading(false);

        if (response.config.responseType === 'blob') {
          return response;
        }

        if (response.data?.code === 1000) {
          return response;
        }

        return Promise.reject(response);
      },
      (error: AxiosError) => {
        this.dependencies?.loadingManager?.setLoading(false);
        this.handleAuthError(error);
        return Promise.reject(error);
      }
    );
  }

  private handleAuthError(error: AxiosError) {
    const isAuthError = error.status === 401 || 
                       (this.config.isStandard ? false : [401, 403].includes(error.status as number));
    
    if (isAuthError && this.dependencies?.authManager) {
      this.dependencies?.authManager.clearAuth();
      this.dependencies?.authManager.redirectToLogin();
    }
  }

  private getUrl(url: string): string {
    return url;
  }

  // Public API methods remain the same
  public async Get<T>(url: string, params = {}): Promise<T> {
    const res: AxiosResponse<T> = await this.instance.get(this.getUrl(url), { params });
    return res.data;
  }

  public async Post<T>(url: string, body: any = {}, option?: AxiosRequestConfig): Promise<T> {
    const res: AxiosResponse<T> = await this.instance.post(this.getUrl(url), body, option);
    return res.data;
  }

  public async Put<T>(url: string, body: any = {}, option?: AxiosRequestConfig): Promise<T> {
    const res: AxiosResponse<T> = await this.instance.put(this.getUrl(url), body, option);
    return res.data;
  }

  public async Patch<T>(url: string, body: any = {}, option?: AxiosRequestConfig): Promise<T> {
    const res: AxiosResponse<T> = await this.instance.patch(this.getUrl(url), body, option);
    return res.data;
  }

  public async Delete<T>(url: string, option?: AxiosRequestConfig): Promise<T> {
    const res: AxiosResponse<T> = await this.instance.delete(this.getUrl(url), option);
    return res.data;
  }

  public async Upload<T>(
    url: string,
    formData: FormData,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
  ): Promise<T> {
    const results: AxiosResponse<T> = await this.instance.post(this.getUrl(url), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (typeof onUploadProgress === 'function') {
          onUploadProgress(progressEvent);
        }
      }
    });
    return results.data;
  }

  public async Download<T>(url: string): Promise<T> {
    const results: AxiosResponse<T> = await this.instance.get(this.getUrl(url), {
      responseType: 'blob'
    });
    return results.data;
  }

  public GetWithAbort<T>(url: string, params = {}): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.get(this.getUrl(url), { params, signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public PostWithAbort<T>(url: string, body: any = {}, option?: AxiosRequestConfig): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.post(this.getUrl(url), body, { ...option, signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public PutWithAbort<T>(url: string, body: any = {}, option?: AxiosRequestConfig): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.put(this.getUrl(url), body, { ...option, signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public PatchWithAbort<T>(url: string, body: any = {}, option?: AxiosRequestConfig): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.patch(this.getUrl(url), body, { ...option, signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public DeleteWithAbort<T>(url: string, option?: AxiosRequestConfig): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.delete(this.getUrl(url), { ...option, signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public UploadWithAbort<T>(
    url: string,
    formData: FormData,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
  ): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;

    const request = this.instance.post(this.getUrl(url), formData, {
      signal,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (typeof onUploadProgress === 'function') {
          onUploadProgress(progressEvent);
        }
      }
    });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  public DownloadWithAbort<T>(url: string): IResponseWithAbort<T> {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = this.instance.get(this.getUrl(url), { responseType: 'blob', signal });
    const cancel = () => controller.abort();
    return {
      request,
      cancel
    };
  }

  // Utility methods for external integrations
  public updateToken(token: string) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token.replace('Bearer ', '')}`;
  }

  public updateBaseUrl(baseUrl: string) {
    this.instance.defaults.baseURL = baseUrl;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}