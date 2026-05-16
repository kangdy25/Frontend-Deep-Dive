/**
 * 보이어-무어 문자열 검색 알고리즘
 * @param text 본문 문자열
 * @param pattern 찾고자 하는 패턴 문자열
 * @returns 패턴이 발견된 시작 인덱스들의 배열
 */
function boyerMooreSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  const result: number[] = [];

  if (m === 0 || n < m) return result;

  // 1. 나쁜 문자 표 (Bad Character Table) 만들기
  // 패턴 내의 각 문자가 나타나는 '가장 마지막 인덱스'를 기록합니다.
  const badCharTable: Record<string, number> = {};

  // 표를 -1로 초기화할 필요 없이, 존재하는 문자만 인덱스를 저장합니다.
  // 패턴의 처음부터 끝까지 순회하므로, 동일 문자가 여러 번 나오면 자연스럽게 가장 오른쪽 인덱스로 덮어씌워집니다.
  for (let i = 0; i < m; i++) {
    badCharTable[pattern[i]] = i;
  }

  let s = 0; // s: 본문에서 패턴이 시작되는 위치 (Shift 값)

  // 패턴이 본문을 벗어나지 않을 때까지 반복
  while (s <= n - m) {
    let j = m - 1; // 패턴의 오른쪽 끝에서부터 비교를 시작!

    // 패턴과 본문의 문자가 일치하는 동안 왼쪽으로 이동하며 비교
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    // j가 0보다 작아졌다는 것은 패턴의 모든 문자가 일치했다는 의미 (검색 성공!)
    if (j < 0) {
      result.push(s);

      // 다음 매칭을 찾기 위해 패턴을 이동시킵니다.
      // 텍스트의 다음 문자가 패턴에 등장한다면 그에 맞게 이동하고, 아니면 패턴 길이만큼 이동합니다.
      const nextCharInText = s + m < n ? text[s + m] : undefined;
      const skipAmount = nextCharInText && nextCharInText in badCharTable ? m - badCharTable[nextCharInText] : m + 1;
      s += skipAmount;
    } else {
      // 불일치 발생! (나쁜 문자: text[s + j])
      const badChar = text[s + j];

      // 나쁜 문자가 표에 있는지 확인
      const badCharIndex = badChar in badCharTable ? badCharTable[badChar] : -1;

      // 핵심 로직: 현재 불일치한 패턴 인덱스(j)에서 나쁜 문자의 인덱스를 빼서 이동할 칸 수를 구합니다.
      // 단, 계산된 값이 1보다 작으면(패턴이 뒤로 후진하는 현상 방지) 최소 1칸은 전진하도록 보정합니다.
      const shift = Math.max(1, j - badCharIndex);

      s += shift; // 패턴 이동
    }
  }

  return result;
}

const text = "FINDING A NEEDLE IN A HAYSTACK";
const pattern = "NEEDLE";

console.log(`본문: "${text}"`);
console.log(`패턴: "${pattern}"`);
console.log(`찾은 위치:`, boyerMooreSearch(text, pattern));
