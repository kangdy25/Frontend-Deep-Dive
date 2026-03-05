/**
 * 삽입 정렬 (Insertion Sort)
 * @param arr 정렬할 배열
 * @returns 정렬된 배열
 */
function insertionSort<T>(arr: T[]): T[] {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // 1. 현재 선택된 요소를 'key'로 복사해둠
    let key = arr[i];
    let j = i - 1;

    // 2. 'key'보다 큰 요소들을 한 칸씩 뒤로 밀어냄
    // 앞부분은 이미 정렬되어 있다고 가정함
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 3. 적절한 위치를 찾았으므로 'key'를 삽입
    arr[j + 1] = key;
  }

  return arr;
}

// 테스트
const items = [9, 5, 1, 4, 3];
console.log("정렬 전:", items);
console.log("정렬 후:", insertionSort(items));
