/**
 * 오늘 날짜를 YYYY.MM.DD 형태로 반환
 */
export const getTodayDate = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(now).replaceAll(' ', '').replace(/\.$/, '');
};
