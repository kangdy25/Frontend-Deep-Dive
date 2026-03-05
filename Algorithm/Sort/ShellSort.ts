/**
 * 쉘 정렬 (Shell Sort)
 * @param arr 정렬할 배열
 * @returns 정렬된 배열
 */
function shellSort<T>(arr: T[]): T[] {
  const n = arr.length;

  // 1. 간격(Gap)을 설정 (배열 길이의 절반으로 시작해서 매회 절반으로 줄임)
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 2. 설정된 간격만큼 떨어진 요소들을 삽입 정렬 방식으로 정렬
    for (let i = gap; i < n; i++) {
      let key = arr[i];
      let j = i;

      // 3. 간격을 둔 부분 리스트 내에서 비교 및 이동
      while (j >= gap && arr[j - gap] > key) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // 적절한 위치에 삽입
      arr[j] = key;
    }
  }

  return arr;
}

// 테스트
const test = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15];
console.log("정렬 전:", test);
console.log("정렬 후:", shellSort(test));
