/**
 * 순차 탐색 (Sequential Search)
 * @param arr 탐색 대상 배열
 * @param target 찾고자 하는 값
 * @returns 찾은 요소의 인덱스 (없으면 -1)
 */
function sequentialSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    // 현재 요소가 타겟과 일치하는지 확인
    if (arr[i] === target) {
      return i; // 찾으면 즉시 인덱스 반환
    }
  }
  return -1; // 끝까지 못 찾으면 -1 반환
}

// 사용 예시
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(sequentialSearch(fruits, "Cherry")); // 2
console.log(sequentialSearch(fruits, "Grape")); // -1
