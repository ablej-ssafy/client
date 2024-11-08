export interface ResponseType<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}

export interface Paging<T> {
  content: T;
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}
