/**
 * 라빈-카프 스트링 매칭 알고리즘
 * @param text 본문 문자열
 * @param pattern 찾고자 하는 패턴 문자열
 * @param q 해시 충돌을 줄이고 오버플로우를 막기 위한 아주 큰 소수 (Prime Number)
 * @returns 패턴이 발견된 모든 시작 인덱스 배열
 */
function rabinKarpSearch(text: string, pattern: string, q: number = 101): number[] {
  const d = 256; // 사용할 문자 집합의 개수 (ASCII 코드 기준 256개)
  const n = text.length;
  const m = pattern.length;
  const result: number[] = [];

  // 예외 처리
  if (m === 0 || m > n) return result;

  let pHash = 0; // 패턴의 해시값
  let tHash = 0; // 본문 현재 윈도우의 해시값
  let h = 1;

  // h값 계산: d^(m-1) % q
  // (나중에 윈도우에서 맨 앞글자를 뺄 때 곱해줄 가중치입니다)
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // 1단계: 패턴의 해시값과 본문 첫 윈도우의 해시값을 초기 계산
  for (let i = 0; i < m; i++) {
    pHash = (d * pHash + pattern.charCodeAt(i)) % q;
    tHash = (d * tHash + text.charCodeAt(i)) % q;
  }

  // 2단계: 본문을 슬라이딩 윈도우로 탐색
  for (let i = 0; i <= n - m; i++) {
    // 해시값이 일치하는 경우! (진짜 같은지, 아니면 해시 충돌인지 확인)
    if (pHash === tHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false; // 해시 충돌 발생 (글자가 다름)
          break;
        }
      }
      // 진짜로 모든 글자가 다 같다면 결과 배열에 추가
      if (match) {
        result.push(i);
      }
    }

    // 3단계: 다음 윈도우의 해시값을 계산 (롤링 해시 적용)
    if (i < n - m) {
      // 공식: 이전 해시값에서 맨 앞글자(text[i])를 빼고, d를 곱한 뒤, 새 글자(text[i+m])를 더함
      tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;

      // 자바스크립트/타입스크립트 특성상 모듈로 연산 결과가 음수가 될 수 있으므로 양수로 보정
      if (tHash < 0) {
        tHash = tHash + q;
      }
    }
  }

  return result;
}

const text = "AABAACAADAABAABA";
const pattern = "AABA";

const matches = rabinKarpSearch(text, pattern);
console.log(`본문: ${text}`);
console.log(`패턴 '${pattern}'을(를) 찾은 인덱스:`, matches);
