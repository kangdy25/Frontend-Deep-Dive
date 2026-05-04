interface Edge {
  u: number; // 출발 노드
  v: number; // 도착 노드
  weight: number; // 가중치
}

function bellmanFord(
  vertices: number,
  edges: Edge[],
  start: number
): { distances: number[]; hasNegativeCycle: boolean } {
  // 1. 거리 테이블 초기화
  const distances = new Array(vertices).fill(Infinity);
  distances[start] = 0;

  // 2. V-1번 간선 완화(Relaxation) 수행
  for (let i = 0; i < vertices - 1; i++) {
    for (const edge of edges) {
      const { u, v, weight } = edge;
      
      // 출발 노드가 아직 도달 불가능한 상태가 아니고, 
      // 기존 거리보다 새로운 거리가 더 짧을 때 갱신
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  // 3. 음수 사이클 검출 (V번째 확인)
  for (const edge of edges) {
    const { u, v, weight } = edge;
    if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
      // 거리가 또 갱신된다면 음수 사이클이 존재함
      return { distances: [], hasNegativeCycle: true };
    }
  }

  return { distances, hasNegativeCycle: false };
}

// --- 실행 테스트 ---
// 정점 5개 (0, 1, 2, 3, 4)
const vertices = 5;
const edges: Edge[] = [
  { u: 0, v: 1, weight: 4 },
  { u: 0, v: 2, weight: 2 },
  { u: 1, v: 2, weight: -3 },
  { u: 1, v: 3, weight: 2 },
  { u: 2, v: 3, weight: 3 },
  { u: 2, v: 4, weight: 1 },
  { u: 3, v: 4, weight: -5 }
];

const result = bellmanFord(vertices, edges, 0);

if (result.hasNegativeCycle) {
  console.log("경고: 그래프에 음수 사이클이 존재합니다.");
} else {
  console.log("시작 노드(0)로부터의 최단 거리:", result.distances);
  // 출력: [ 0, 4, 1, 4, -1 ]
}