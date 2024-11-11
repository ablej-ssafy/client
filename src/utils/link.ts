/**
 * 링크에 http://나 https://가 없으면 붙여주는 함수
 */
export const addHttp = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }

  return url;
};
