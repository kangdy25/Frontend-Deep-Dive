function floydWarshall(graph: number[][]): number[][] {
  const n = graph.length;
  // 2차원 거리 배열 초기화 (깊은 복사)
  const dist: number[][] = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => graph[i][j])
  );

  // 플로이드-워셜 알고리즘의 3중 루프
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 경유지 k를 거쳐가는 경로가 더 짧은 경우 갱신
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// --- 실행 테스트 ---
const INF = Infinity;
const graph: number[][] = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0]
];

const shortestPaths = floydWarshall(graph);
console.log("모든 정점 간의 최단 거리:");
console.log(shortestPaths);