export interface Response<T> {
  code: number;
  message: string;
  success: boolean;
  data: T;
}
