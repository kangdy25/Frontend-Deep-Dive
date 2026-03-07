/**
 * 기수 정렬 (Radix Sort)
 * @param array 정렬할 배열
 * @returns 정렬된 배열
 */
function radixSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  // 최댓값 추출
  const max = Math.max(...array);
  let result = [...array];

  // 일의 자리(1)부터 시작해서 10배씩 키우며 반복 (exp = 1, 10, 100...)
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const n = result.length;
    const output = new Array(n);
    const count = new Array(10).fill(0); // 0~9까지의 숫자를 담을 바구니

    // 현재 자릿수(exp)의 숫자 개수 세기
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(result[i] / exp) % 10;
      count[digit]++;
    }

    // 누적합 계산 (안정 정렬을 위한 위치 결정)
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // 뒤에서부터 정렬하며 결과 생성 (Stable Sort 유지)
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(result[i] / exp) % 10;
      output[count[digit] - 1] = result[i];
      count[digit]--;
    }

    // 현재 자릿수 정렬 결과를 다음 자릿수 정렬의 입력으로 사용
    result = output;
  }

  return result;
}

// 사용 예시
const numberList = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numberList)); // [2, 24, 45, 66, 75, 90, 170, 802]
