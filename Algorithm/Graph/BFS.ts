class GraphForBFS {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map<string, string[]>();
  }

  // 정점(Vertex) 추가
  public addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // 간선(Edge) 추가 (무방향 그래프 기준)
  public addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  // 너비 우선 탐색 (BFS) 구현
  public bfs(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const queue: string[] = [start];

    // 시작 정점 방문 처리
    visited[start] = true;

    while (queue.length > 0) {
      // 큐의 가장 첫 번째 요소를 꺼냅니다.
      const current = queue.shift()!;
      result.push(current);

      // 현재 정점과 인접한 정점들을 순회
      this.adjacencyList.get(current)?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          // 방문하지 않은 정점은 큐에 추가합니다.
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// --- 실행 테스트 ---
const graphForBFS = new GraphForBFS();
graphForBFS.addVertex("A");
graphForBFS.addVertex("B");
graphForBFS.addVertex("C");
graphForBFS.addVertex("D");
graphForBFS.addVertex("E");
graphForBFS.addVertex("F");

graphForBFS.addEdge("A", "B");
graphForBFS.addEdge("A", "C");
graphForBFS.addEdge("B", "D");
graphForBFS.addEdge("C", "E");
graphForBFS.addEdge("D", "E");
graphForBFS.addEdge("D", "F");
graphForBFS.addEdge("E", "F");

console.log("BFS 탐색 결과:", graphForBFS.bfs("A"));
// 결과 예시: ["A", "B", "C", "D", "E", "F"] (인접 노드 순서에 따라 달라질 수 있음)
