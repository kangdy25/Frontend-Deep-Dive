/**
 * 버블 정렬 (Bubble Sort)
 * @param arr 정렬할 배열
 * @returns 정렬된 배열
 */
function bubbleSort<T>(arr: T[]): T[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 최적화: 교체 발생 여부를 체크
    let swapped = false;

    // 끝부분은 이미 정렬되어 확정되었으므로 n - 1 - i 까지만 비교
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 인접한 두 요소 교체
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 한 번도 교체가 일어나지 않았다면 이미 정렬된 상태이므로 종료
    if (!swapped) break;
  }

  return arr;
}

// 테스트
const data = [5, 3, 8, 1, 2];
console.log("정렬 전:", data);
console.log("정렬 후:", bubbleSort(data));
