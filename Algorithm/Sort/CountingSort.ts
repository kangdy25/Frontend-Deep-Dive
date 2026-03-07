/**
 * 계수 정렬 (Counting Sort)
 * @param array 정렬할 배열
 * @returns 정렬된 배열
 */
function countingSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  // 데이터의 최대값 찾기
  const max = Math.max(...array);

  // 각 숫자의 개수를 저장할 배열 생성 (0으로 초기화)
  const countArray: number[] = new Array(max + 1).fill(0);

  // 데이터 개수 세기
  for (const num of array) {
    countArray[num]++;
  }

  // countArray를 바탕으로 결과 배열 만들기
  const result: number[] = [];

  for (let i = 0; i <= max; i++) {
    // i라는 숫자가 나타난 횟수만큼 결과 배열에 추가
    while (countArray[i] > 0) {
      result.push(i);
      countArray[i]--;
    }
  }

  return result;
}

// 사용 예시
const datalist = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(datalist)); // [1, 2, 2, 3, 3, 4, 8]
