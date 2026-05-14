/**
 * 행렬의 연쇄적 곱셈의 최소 비용과 최적 분할 지점을 계산합니다.
 * @param p 행렬들의 크기를 담은 1차원 배열 (예: [2, 3, 2, 3, 1])
 * @returns m (최소 비용 배열), s (최적 분할 지점 배열)
 */
function matrixChainOrder(p: number[]): { m: number[][]; s: number[][] } {
  // 행렬의 총 개수 n
  const n = p.length - 1;

  // m[i][j]: i번째부터 j번째 행렬까지 곱하는 최소 연산 횟수 (DP 테이블)
  // s[i][j]: i번째부터 j번째 행렬까지 곱할 때 최적의 분할 지점 k
  // (인덱스를 1부터 사용하기 위해 n + 1 크기로 생성)
  const m: number[][] = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(0),
  );
  const s: number[][] = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(0),
  );

  // 구간의 길이(L)를 2부터 n까지 점차 늘려가며 표를 채웁니다. (Bottom-Up)
  for (let L = 2; L <= n; L++) {
    // i: 구간의 시작 인덱스
    for (let i = 1; i <= n - L + 1; i++) {
      // j: 구간의 끝 인덱스
      const j = i + L - 1;

      m[i][j] = Infinity;

      // k: 분할 지점 (i부터 j-1까지) -> 어디서 쪼개야 최소가 되는지 모두 테스트
      for (let k = i; k < j; k++) {
        // 점화식: (왼쪽 덩어리 비용) + (오른쪽 덩어리 비용) + (두 덩어리 곱하는 비용)
        const cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];

        // 더 적은 연산 횟수를 찾았다면 갱신하고, 분할 지점(k)을 메모해 둠
        if (cost < m[i][j]) {
          m[i][j] = cost;
          s[i][j] = k;
        }
      }
    }
  }

  return { m, s };
}

/**
 * s 배열(메모장)을 바탕으로 최적의 괄호 묶음 문자열을 만들어냅니다.
 */
function printOptimalParens(s: number[][], i: number, j: number): string {
  if (i === j) {
    return `A${i}`;
  }

  const left = printOptimalParens(s, i, s[i][j]);
  const right = printOptimalParens(s, s[i][j] + 1, j);

  return `(${left}${right})`;
}

const dimensions = [2, 3, 2, 3, 1];

const { m, s } = matrixChainOrder(dimensions);
const n = dimensions.length - 1;

console.log(`최소 연산 횟수: ${m[1][n]}`);
console.log(`최적의 곱셈 순서: ${printOptimalParens(s, 1, n)}`);
