/**
 * 퀵 정렬 (Quick Sort)
 * @param array 정렬할 배열
 * @param {number} [left=0] - 정렬을 시작할 범위의 왼쪽 인덱스 (기본값: 0)
 * @param {number} [right=array.length - 1] - 정렬을 끝낼 범위의 오른쪽 인덱스
 * @returns 정렬된 배열
 */
function quickSort<T>(
  array: T[],
  left: number = 0,
  right: number = array.length - 1,
): T[] {
  if (left < right) {
    // 피벗을 기준으로 배열을 분할하고, 피벗의 최종 위치를 반환한다.
    const pivotIndex = partition(array, left, right);

    // 피벗의 왼쪽 부분 정렬
    quickSort(array, left, pivotIndex - 1);
    // 피벗의 오른쪽 부분 정렬
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

/**
 * 분할(Partition): 피벗을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 이동
 * @param array 정렬할 배열
 * @param left - 현재 분할할 작업 영역의 시작 인덱스
 * @param right - 현재 분할할 작업 영역의 끝 인덱스 (동시에 피벗으로 사용됨)
 * @returns  정렬이 완료된 피벗의 최종 위치 인덱스
 */
function partition<T>(array: T[], left: number, right: number): number {
  const pivot = array[right]; // 맨 오른쪽 요소를 피벗으로 선택
  let i = left;
  let j = left;

  while (j < right) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
    j++;
  }

  [array[i], array[right]] = [array[right], array[i]];

  return i;
}

// 사용 예시
const nums = [5, 2, 9, 1, 5, 6];
console.log(quickSort(nums)); // [1, 2, 5, 5, 6, 9]
