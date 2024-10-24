class HttpClient {
  static BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  private static instance: null | HttpClient = null;
  private static httpClient: null | typeof fetch = null;

  private constructor() {
    HttpClient.httpClient = fetch;
  }

  static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  /**
   * HTTP 요청을 보내는 함수
   * @param url 요청 URL
   * @param options fetch API의 RequestInit 객체
   */
  get(url: string, options?: RequestInit) {
    return HttpClient.httpClient!(HttpClient.BASE_URL + url, options);
  }

  /**
   * POST 요청을 보내는 함수
   * @param url 요청 URL
   * @param body 요청 바디
   * @param options fetch API의 RequestInit 객체
   */
  post(url: string, body?: BodyInit, options?: Omit<RequestInit, 'body'>) {
    return HttpClient.httpClient!(HttpClient.BASE_URL + url, {
      ...options,
      body,
      method: 'POST',
    });
  }

  /**
   * PUT 요청을 보내는 함수
   * @param url 요청 URL
   * @param options fetch API의 RequestInit 객체
   */
  put(url: string, options?: RequestInit) {
    return HttpClient.httpClient!(HttpClient.BASE_URL + url, {
      ...options,
      method: 'PUT',
    });
  }

  /**
   * DELETE 요청을 보내는 함수
   * @param url 요청 URL
   * @param options fetch API의 RequestInit 객체
   */
  delete(url: string, options?: RequestInit) {
    return HttpClient.httpClient!(HttpClient.BASE_URL + url, {
      ...options,
      method: 'DELETE',
    });
  }
}

export default HttpClient.getInstance();
