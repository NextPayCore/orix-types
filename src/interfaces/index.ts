export interface Response<T> {
  code: number;
  message: string;
  success: boolean;
  data: T;
}

// Export direct interface files
export * from './authen';
export * from './constantEnum.interface';
export * from './file.interface';
export * from './menu';
export * from './mnpResponse.interface';

// Export subdirectory interfaces
export * from './order';
export * from './user';
export * from './bffweb';
export * from './wallet';

