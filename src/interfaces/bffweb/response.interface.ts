// Define axios response type locally to avoid external dependency
export interface AxiosResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: unknown;
  config: unknown;
}

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ResponseWithAbort<T> {
  request: Promise<AxiosResponse<Response<T>>>;
  cancel: () => void;
}
