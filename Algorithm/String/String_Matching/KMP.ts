/**
 * 1. 패턴에 대한 LPS(pi) 배열을 미리 계산하는 함수
 * @param pattern 찾고자 하는 패턴 문자열
 * @returns LPS 배열
 */
function computeLPSArray(pattern: string): number[] {
  const m = pattern.length;
  const lps = new Array(m).fill(0);

  let len = 0; // 이전까지 일치했던 접두사/접미사의 최대 길이
  let i = 1; // lps 배열을 채울 인덱스 (0번 인덱스는 항상 0)

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      // 문자가 일치하면 길이를 1 증가시키고 lps 배열에 기록
      len++;
      lps[i] = len;
      i++;
    } else {
      // 문자가 다를 때가 KMP의 핵심!
      if (len !== 0) {
        // 길이가 0이 될 때까지, 이전의 패턴 매칭 기록을 참조하여 len을 되돌립니다.
        len = lps[len - 1];
      } else {
        // 완전히 일치하는 패턴이 없으면 0을 기록하고 다음 문자로 넘어감
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

/**
 * 2. KMP 알고리즘을 이용한 문자열 검색 함수
 * @param text 본문 문자열
 * @param pattern 찾고자 하는 패턴 문자열
 * @returns 패턴이 발견된 시작 인덱스들의 배열
 */
function kmpSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  const result: number[] = [];

  // 예외 처리
  if (m === 0) return result;

  // 패턴에 대한 LPS 배열 사전 생성
  const lps = computeLPSArray(pattern);

  let i = 0; // 본문(text)의 포인터
  let j = 0; // 패턴(pattern)의 포인터

  // 본문의 포인터 i는 절대 뒤로(감소하는 방향으로) 가지 않습니다!
  while (i < n) {
    if (pattern[j] === text[i]) {
      // 글자가 같으면 둘 다 다음 칸으로 이동
      j++;
      i++;
    }

    if (j === m) {
      // 패턴의 끝까지 모두 일치했다면 (검색 성공)
      result.push(i - j); // 시작 인덱스를 결과에 추가
      // 다음 검색을 위해 j 위치를 LPS 배열을 참조하여 조정
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      // 불일치 발생!
      if (j !== 0) {
        // 지금까지 일치한 부분이 있다면, LPS 배열을 참조하여 패턴을 점프시킵니다.
        // 이때 본문 포인터 i는 가만히 유지됩니다.
        j = lps[j - 1];
      } else {
        // 첫 글자부터 다르면 본문 포인터만 다음 칸으로 이동
        i++;
      }
    }
  }

  return result;
}

// --- 실행 예제 ---
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log(`패턴 '${pattern}'의 LPS 배열:`, computeLPSArray(pattern));
// 출력: [0, 0, 1, 2, 0, 1, 2, 3, 4]

console.log(`본문에서 패턴을 찾은 인덱스:`, kmpSearch(text, pattern));
// 출력: [ 10 ]
