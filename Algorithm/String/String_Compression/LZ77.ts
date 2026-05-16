// LZ77의 토큰 타입: [뒤로 갈 거리, 복사할 길이, 다음 문자]
type LZ77Token = [number, number, string];

/**
 * LZ77 알고리즘을 사용해 문자열을 압축합니다.
 * @param text 원본 문자열
 * @param windowSize 탐색 버퍼(사전)의 최대 크기 (기본값: 255)
 */
function lz77Compress(text: string, windowSize: number = 255): LZ77Token[] {
  const tokens: LZ77Token[] = [];
  let cursor = 0; // 현재 압축을 진행 중인 위치

  while (cursor < text.length) {
    let bestDistance = 0;
    let bestLength = 0;

    // 탐색 버퍼의 시작 위치 (윈도우 크기만큼만 뒤로 돌아볼 수 있음)
    const searchStart = Math.max(0, cursor - windowSize);

    // 과거의 기록(탐색 버퍼)을 순회하며 가장 길게 겹치는 패턴을 찾습니다.
    for (let i = searchStart; i < cursor; i++) {
      let currentLength = 0;

      // 현재 위치(cursor)의 글자와 과거 위치(i)의 글자가 얼마나 연속으로 같은지 확인
      while (cursor + currentLength < text.length && text[i + currentLength] === text[cursor + currentLength]) {
        currentLength++;
      }

      // 지금까지 찾은 패턴 중 가장 길다면 기록 갱신
      if (currentLength > bestLength) {
        bestLength = currentLength;
        bestDistance = cursor - i;
      }
    }

    // 매칭된 패턴 바로 다음 글자를 가져옵니다.
    const nextCharIndex = cursor + bestLength;
    const nextChar = nextCharIndex < text.length ? text[nextCharIndex] : "";

    // 토큰 생성 및 결과 배열에 추가
    tokens.push([bestDistance, bestLength, nextChar]);

    // 커서를 매칭된 길이 + 1(다음 글자) 만큼 앞으로 이동
    cursor += bestLength + 1;
  }

  return tokens;
}

/**
 * LZ77 토큰 배열을 다시 원본 문자열로 복원(해독)합니다.
 */
function lz77Decompress(tokens: LZ77Token[]): string {
  let result = "";

  for (const [distance, length, nextChar] of tokens) {
    // 길이가 0보다 크면 과거의 문자열을 복사해옵니다.
    if (length > 0) {
      const startIdx = result.length - distance;
      // 주의: result[startIdx + i]를 그때그때 읽어서 추가해야 합니다.
      // (패턴이 겹쳐서 자기 자신을 복사해야 하는 특수한 경우를 처리하기 위함)
      for (let i = 0; i < length; i++) {
        result += result[startIdx + i];
      }
    }
    // 마지막으로 '다음 문자'를 이어 붙입니다.
    result += nextChar;
  }

  return result;
}

const originalText = "ABABCABABCD";
const compressedTokens = lz77Compress(originalText);

console.log(`원본 문자열: ${originalText}`);
console.log("압축된 토큰들:");
compressedTokens.forEach((t) => console.log(`  거리: ${t[0]}, 길이: ${t[1]}, 다음글자: '${t[2]}'`));

const decompressedText = lz77Decompress(compressedTokens);
console.log(`복원된 문자열: ${decompressedText}`);
