class GraphForDFS {
  // 인접 리스트를 저장할 맵
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map<string, string[]>();
  }

  // 정점 추가
  public addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // 간선 추가 (무방향 그래프 기준)
  public addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  // 1. 재귀적 DFS 구현
  public dfsRecursive(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex: string) {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList.get(vertex)?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    }

    dfs(start);
    return result;
  }

  // 2. 반복적 DFS 구현 (스택 사용)
  public dfsIterative(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const stack: string[] = [start];

    // 시작 정점 방문 처리
    visited[start] = true;

    while (stack.length > 0) {
      // 스택의 맨 위 요소를 꺼냅니다.
      const current = stack.pop()!;
      result.push(current);

      this.adjacencyList.get(current)?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

// --- 실행 테스트 ---
const graphForDFS = new GraphForDFS();
graphForDFS.addVertex("A");
graphForDFS.addVertex("B");
graphForDFS.addVertex("C");
graphForDFS.addVertex("D");
graphForDFS.addVertex("E");
graphForDFS.addVertex("F");

graphForDFS.addEdge("A", "B");
graphForDFS.addEdge("A", "C");
graphForDFS.addEdge("B", "D");
graphForDFS.addEdge("C", "E");
graphForDFS.addEdge("D", "E");
graphForDFS.addEdge("D", "F");
graphForDFS.addEdge("E", "F");

console.log("DFS (재귀):", graphForDFS.dfsRecursive("A"));
console.log("DFS (반복):", graphForDFS.dfsIterative("A"));
