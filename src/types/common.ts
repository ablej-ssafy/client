export interface ResponseType<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}
