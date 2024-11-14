/**
 * 경력 연수를 반환
 */

export const convertAnnual = (annualTo: number, annualFrom: number) => {
  if (annualFrom === 0 && annualTo === 1) {
    return '신입';
  }

  if (annualFrom === 0 && annualTo !== 1 && annualTo !== 100) {
    return `${annualTo}년 이하`;
  }

  if (annualFrom !== 0 && annualTo === 100) {
    return `${annualFrom}년 이상`;
  }

  if (annualFrom === 0 && annualTo === 100) {
    return '경력 무관';
  }

  if (annualFrom !== 0 && annualTo !== 100) {
    return `${annualFrom} ~ ${annualTo}년`;
  }
};
