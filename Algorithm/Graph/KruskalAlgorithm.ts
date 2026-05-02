class UnionFind {
  private parent: number[];

  constructor(size: number) {
    // 초기화: 자기 자신을 부모로 설정
    this.parent = Array.from({ length: size }, (_, i) => i);
  }

  // 루트 노드를 찾는 함수 (경로 압축 적용)
  public find(i: number): number {
    if (this.parent[i] === i) {
      return i;
    }
    return (this.parent[i] = this.find(this.parent[i]));
  }

  // 두 집합을 합치는 함수
  public union(i: number, j: number): boolean {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI !== rootJ) {
      this.parent[rootI] = rootJ;
      return true; // 합치기 성공 (사이클 없음)
    }
    return false; // 이미 같은 집합 (사이클 발생)
  }
}

interface Edge {
  u: number;
  v: number;
  weight: number;
}

function kruskal(
  vertices: number,
  edges: Edge[],
): { mst: Edge[]; minCost: number } {
  // 1. 간선을 가중치 기준 오름차순으로 정렬
  edges.sort((a, b) => a.weight - b.weight);

  const uf = new UnionFind(vertices);
  const mst: Edge[] = [];
  let minCost = 0;
  let edgeCount = 0;

  // 2. 간선 선택
  for (const edge of edges) {
    // 사이클을 형성하지 않는 경우에만 MST에 포함
    if (uf.union(edge.u, edge.v)) {
      mst.push(edge);
      minCost += edge.weight;
      edgeCount++;

      // 신장 트리의 간선 개수는 정점의 개수 - 1
      if (edgeCount === vertices - 1) {
        break;
      }
    }
  }

  return { mst, minCost };
}

// --- 실행 테스트 ---
const vertices = 4;
const edges: Edge[] = [
  { u: 0, v: 1, weight: 10 },
  { u: 0, v: 2, weight: 6 },
  { u: 0, v: 3, weight: 5 },
  { u: 1, v: 3, weight: 15 },
  { u: 2, v: 3, weight: 4 },
];

const result = kruskal(vertices, edges);
console.log("MST 간선 목록:", result.mst);
console.log("최소 비용:", result.minCost);
