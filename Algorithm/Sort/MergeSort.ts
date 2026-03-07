/**
 * 병합 정렬 (Merge Sort)
 * @param array 정렬할 배열
 * @returns 정렬된 배열
 */
function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) return array;

  // 분할 (Divide)
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // 재귀적 정렬 및 병합 (Conquer & Combine)
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 합병(Merge): 두 개의 정렬된 배열을 하나로 합치는 함수
 * @param left - 왼쪽의 정렬된 부분 배열
 * @param right - 오른쪽의 정렬된 부분 배열
 * @returns - 두 배열이 합쳐져 정렬된 새로운 배열
 */
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 두 배열에 요소가 남아있는 동안 비교하며 result에 담음
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 남은 요소들을 결과 배열 뒤에 붙임 (한쪽 배열이 먼저 끝났을 경우)
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

// 사용 예시
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
