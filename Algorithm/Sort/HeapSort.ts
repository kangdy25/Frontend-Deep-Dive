/**
 * 힙 정렬 (Heap Sort)
 * @param array 정렬할 배열
 * @returns 정렬된 배열
 */
function heapSort<T>(array: T[]): T[] {
  const n = array.length;

  // 최대 힙(Max Heap) 구성
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    // 루트(가장 큰 값)를 현재 범위의 맨 뒤로 보냄 (Swap)
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, i, 0);
  }

  return array;
}

/**
 * 주어진 노드를 기준으로 힙 성질을 유지시키는 함수
 * @param array 전체 배열
 * @param size 현재 힙의 크기 (정렬이 끝난 뒷부분 제외)
 * @param i 힙 구조를 검사할 기준 노드 인덱스
 */
function heapify<T>(array: T[], size: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1; // 왼쪽 자식 노드
  const right = 2 * i + 2; // 오른쪽 자식 노드

  // 왼쪽 자식이 부모보다 크다면
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  // 오른쪽 자식이 부모보다 크다면
  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  // 부모가 가장 큰 게 아니라면 자식과 위치를 바꾸고,
  // 영향을 받은 하위 트리까지 재귀적으로 검사
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, size, largest);
  }
}

// 사용 예시
const data = [12, 11, 13, 5, 6, 7];
console.log(heapSort(data)); // [5, 6, 7, 11, 12, 13]
