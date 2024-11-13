/**
 * 주소를 반환
 */

export const getLocation = (location?: string, strict?: string) => {
  if (location && strict) {
    return location + ' > ' + strict;
  }

  if (location && !strict) {
    return location;
  }

  return '정보 없음';
};
