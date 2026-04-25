/**
 * 반복문을 이용한 이진 탐색
 * @param arr 정렬된 배열 (중요!)
 * @param target 찾고자 하는 값
 */
function binarySearch<T>(
  arr: T[],
  target: T,
  left: number = 0,
  right: number = arr.length - 1,
): number {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

// --- 실행 테스트 ---
const sortedNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("30의 위치:", binarySearch(sortedNumbers, 30)); // 2
