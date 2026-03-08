/**
 * 버킷 정렬 (Bucket Sort)
 * @param array 정렬할 배열
 * @param bucketSize 한 바구니에 담을 범위의 크기 (기본값 5)
 */
function bucketSort(array: number[], bucketSize: number = 5): number[] {
  if (array.length <= 1) return array;

  // 최솟값과 최댓값을 찾아 전체 범위를 파악
  const min = Math.min(...array);
  const max = Math.max(...array);

  // 필요한 바구니의 개수 계산
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  // 데이터를 규칙에 따라 알맞은 바구니에 배분 (Distribution)
  for (const num of array) {
    const bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // 각 바구니 내부를 정렬하고 하나로 합침 (Gather)
  const result: number[] = [];
  for (const bucket of buckets) {
    if (bucket.length > 0) {
      // 바구니 내부 정렬 (여기서는 삽입 정렬이나 기본 sort 사용)
      bucket.sort((a, b) => a - b);
      result.push(...bucket);
    }
  }

  return result;
}

// 사용 예시
const testdata = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14];
console.log(bucketSort(testdata, 10)); // 10 단위로 범위를 나눠서 정렬
