/**
 * 브루트 포스 방식을 사용하여 본문에서 패턴을 검색합니다.
 * @param text 검색 대상이 되는 전체 문자열 (본문)
 * @param pattern 찾고자 하는 문자열 (패턴)
 * @returns 패턴이 처음으로 시작되는 인덱스 (찾지 못하면 -1 반환)
 */
function bruteForceSearch(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;

  // 예외 처리: 패턴이 본문보다 길면 절대로 찾을 수 없음
  if (m > n || m === 0) return -1;

  // 본문을 순회할 인덱스 i
  // 패턴이 본문 밖으로 삐져나가는 것을 막기 위해 (n - m)까지만 검사합니다.
  for (let i = 0; i <= n - m; i++) {
    let j = 0;

    // 패턴의 인덱스 j를 늘려가며 문자 하나씩 비교
    while (j < m && text[i + j] === pattern[j]) {
      j++; // 문자가 일치하면 다음 문자를 비교하기 위해 j 증가
    }

    // while 문이 종료되었을 때, j가 패턴의 길이(m)와 같다면?
    // -> 패턴의 모든 문자가 일치했다는 의미!
    if (j === m) {
      return i; // 매칭이 시작된 본문의 인덱스를 반환
    }

    // 일치하지 않았다면 for문 루프에 의해 i가 1 증가하고,
    // j는 다시 0으로 초기화되어 다음 칸부터 새롭게 비교를 시작합니다.
  }

  // 본문을 끝까지 확인했는데도 못 찾은 경우
  return -1;
}

// --- 실행 예제 ---
const text = "Hello, welcome to the world of TypeScript!";
const pattern1 = "world";
const pattern2 = "Python";

console.log(`'${pattern1}'의 위치:`, bruteForceSearch(text, pattern1)); // 출력: 22
console.log(`'${pattern2}'의 위치:`, bruteForceSearch(text, pattern2)); // 출력: -1
