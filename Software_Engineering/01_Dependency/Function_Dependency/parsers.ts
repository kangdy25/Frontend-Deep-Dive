// Parser 타입을 사용하는 대신 각 함수가 Parser 인터페이스를 충족하도록 타입을 직접 지정합니다.
export const getNumber = (str: string) => {
  return str.replace(/\D/g, "");
};

export const getNumberWithHyphen = (str: string) => {
  return str.replace(/[^0-9-]/g, "");
};
