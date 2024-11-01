export type ResponseType<T> = {
  success: boolean;
  code: number;
  message: string;
  data: T;
};
