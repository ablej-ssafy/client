type CustomBody = BodyInit | object;
type CustomOptions = Omit<RequestInit, 'body'> & {body?: CustomBody};

class HttpClient {
  static BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + '/api/v1';
  private static instance: null | HttpClient = null;
  private static httpClient: typeof fetch;

  private constructor() {
    if (typeof window !== 'undefined') {
      HttpClient.httpClient = fetch.bind(window);
    } else {
      HttpClient.httpClient = fetch;
    }
  }

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  private beforeRequest(options?: CustomOptions): RequestInit {
    if (!options) {
      return {cache: 'no-store'};
    }

    if (options.body && options.body instanceof FormData) {
      return {
        cache: 'no-store',
        ...options,
        body: options.body,
        headers: {
          // 'Content-Type': 'multipart/form-data',
          ...options.headers,
        },
      };
    }

    if (options.body && typeof options.body === 'object') {
      return {
        cache: 'no-store',
        ...options,
        body: JSON.stringify(options.body),
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      };
    }

    return {cache: 'no-store', ...options, body: options.body};
  }

  private async afterResponse<T>(
    responsePromise: Promise<Response>,
  ): Promise<T> {
    const response = await responsePromise;

    return await response.json();
  }

  // private async afterResponse<T>(
  //   responsePromise: Promise<Response>,
  // ): Promise<T> {
  //   try {
  //     const response = await responsePromise;

  //     return await response.json();
  //   } catch (error) {
  //     console.error('API 요청 실패', error);
  //     throw error;
  //   }
  // }

  /**
   * HTTP 요청을 보내는 함수
   * @param url 요청 URL
   * @param options fetch API의 RequestInit 객체
   */
  get<T>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return this.afterResponse<T>(
      HttpClient.httpClient!(
        HttpClient.BASE_URL + url,
        this.beforeRequest(options),
      ),
    );
  }

  /**
   * POST 요청을 보내는 함수
   * @param url 요청 URL
   * @param body 요청 바디
   * @param options fetch API의 RequestInit 객체
   */
  post<T>(url: string, body?: CustomBody, options?: CustomOptions) {
    return this.afterResponse<T>(
      HttpClient.httpClient!(
        HttpClient.BASE_URL + url,
        this.beforeRequest({
          ...options,
          body,
          method: 'POST',
        }),
      ),
    );
  }

  /**
   * PUT 요청을 보내는 함수
   * @param url 요청 URL
   * @param body 요청 바디
   * @param options fetch API의 RequestInit 객체
   */
  put<T>(url: string, body?: CustomBody, options?: CustomOptions) {
    return this.afterResponse<T>(
      HttpClient.httpClient!(
        HttpClient.BASE_URL + url,
        this.beforeRequest({
          ...options,
          body,
          method: 'PUT',
        }),
      ),
    );
  }

  /**
   * DELETE 요청을 보내는 함수
   * @param url 요청 URL
   * @param options fetch API의 RequestInit 객체
   */
  delete(url: string, options?: CustomOptions) {
    return HttpClient.httpClient!(
      HttpClient.BASE_URL + url,
      this.beforeRequest({
        ...options,
        method: 'DELETE',
      }),
    );
  }
}

export default HttpClient.getInstance();
