/**
 * 선택 정렬 (Selection Sort)
 * @param arr 정렬할 배열
 * @returns 정렬된 배열
 */
function selectionSort<T>(arr: T[]): T[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // 최솟값 탐색 및 갱신
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 최솟값 정렬
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// 테스트
const numbers = [64, 25, 12, 22, 11];
console.log("정렬 전:", numbers);
console.log("정렬 후:", selectionSort(numbers));
