/**
 * 두 문자열의 최장 공통 부분 수열(LCS)의 길이와 실제 문자열을 구합니다.
 * @param text1 비교할 첫 번째 문자열 (예: "ABC")
 * @param text2 비교할 두 번째 문자열 (예: "BDC")
 * @returns LCS의 길이와 찾은 부분 수열 문자열
 */
function findLCS(
  text1: string,
  text2: string,
): { length: number; lcsString: string } {
  const m = text1.length;
  const n = text2.length;

  // 1. DP 테이블 생성 및 0으로 초기화 (m+1 x n+1 크기)
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0),
  );

  // 2. DP 테이블 채우기 (Bottom-Up 방식)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 규칙 1: 두 글자가 같을 때 (대각선 왼쪽 위 값 + 1)
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // 규칙 2: 두 글자가 다를 때 (위쪽 칸과 왼쪽 칸 중 큰 값 가져오기)
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 테이블 우측 하단에 있는 값이 최종 LCS의 길이입니다.
  const length = dp[m][n];

  // 3. 역추적(Traceback)을 통해 실제 문자열 찾아내기
  let lcsString = "";
  let i = m;
  let j = n;

  // 표의 끝(우측 하단)에서 시작해 0행/0열에 도달할 때까지 거슬러 올라갑니다.
  while (i > 0 && j > 0) {
    // 글자가 같아서 대각선에서 값을 더해온 경우
    if (text1[i - 1] === text2[j - 1]) {
      // 해당 글자를 결과 문자열의 앞에 붙이고, 대각선 왼쪽 위로 이동
      lcsString = text1[i - 1] + lcsString;
      i--;
      j--;
    }
    // 글자가 달라서 위나 왼쪽에서 값을 끌고 온 경우
    else {
      // 위쪽 값이 더 크거나 같으면 위로 이동
      if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      }
      // 왼쪽 값이 더 크면 왼쪽으로 이동
      else {
        j--;
      }
    }
  }

  return { length, lcsString };
}

const stringX = "ABC";
const stringY = "BDC";

const result = findLCS(stringX, stringY);

console.log(`문자열 1: ${stringX}`);
console.log(`문자열 2: ${stringY}`);
console.log(`최장 공통 부분 수열(LCS) 길이: ${result.length}`);
console.log(`실제 LCS 문자열: ${result.lcsString}`);
