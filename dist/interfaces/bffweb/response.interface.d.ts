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
//# sourceMappingURL=response.interface.d.ts.map