/**
 * 문자열을 RLE 방식으로 압축(인코딩)합니다.
 * @param text 압축할 원본 문자열
 * @returns '숫자+문자' 형태의 압축된 문자열
 */
function encodeRLE(text: string): string {
  if (text.length === 0) return "";

  let encoded = "";
  let count = 1;

  // 두 번째 글자(인덱스 1)부터 끝까지 순회
  // 끝에 도달했을 때 마지막 덩어리를 처리하기 위해 text.length까지 반복 (<=)
  for (let i = 1; i <= text.length; i++) {
    // 이전 글자와 현재 글자가 같으면 카운트 증가
    if (text[i] === text[i - 1]) {
      count++;
    } else {
      // 글자가 달라졌거나 끝에 도달하면, 여태 센 횟수와 이전 글자를 결과에 추가
      encoded += `${count}${text[i - 1]}`;
      count = 1; // 카운트 초기화
    }
  }

  return encoded;
}

/**
 * RLE 방식으로 압축된 문자열을 원본으로 복원(디코딩)합니다.
 * @param encodedText 압축된 문자열 (예: "4A3B")
 * @returns 복원된 원본 문자열
 */
function decodeRLE(encodedText: string): string {
  let decoded = "";
  let countStr = ""; // 반복 횟수가 두 자리 이상일 수 있으므로 문자열로 누적

  for (let i = 0; i < encodedText.length; i++) {
    const char = encodedText[i];

    // 현재 글자가 숫자인지 정규식으로 검사
    if (/[0-9]/.test(char)) {
      countStr += char; // 숫자는 누적 (예: '1', '2' -> '12')
    } else {
      // 숫자가 아니면(알파벳 등) 누적된 숫자만큼 해당 문자를 반복해서 추가
      const count = parseInt(countStr, 10);
      decoded += char.repeat(count);

      countStr = ""; // 다시 다음 덩어리를 위해 초기화
    }
  }

  return decoded;
}

const originalText = "AAAABBBCCDAA";
console.log(`원본 문자열: ${originalText} (길이: ${originalText.length})`);

const compressed = encodeRLE(originalText);
console.log(`압축된 문자열: ${compressed} (길이: ${compressed.length})`);

const decompressed = decodeRLE(compressed);
console.log(`복원된 문자열: ${decompressed}`);
