import type { AxiosResponse } from 'axios';

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ResponseWithAbort<T> {
  request: Promise<AxiosResponse<Response<T>>>;
  cancel: () => void;
}
