/**
 * 오늘 날짜를 YYYY.MM.DD 형태로 반환
 */
export const getTodayDate = () => {
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // 한국 시간으로 변환 (UTC +9)
  const formattedDate = `${koreaTime.getFullYear()}.${String(koreaTime.getMonth() + 1).padStart(2, '0')}.${String(koreaTime.getDate()).padStart(2, '0')}`;
  return formattedDate;
};
