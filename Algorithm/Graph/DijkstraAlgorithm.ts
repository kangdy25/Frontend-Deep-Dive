class PriorityQueue<T> {
  private values: { val: T; priority: number }[] = [];

  public enqueue(val: T, priority: number): void {
    this.values.push({ val, priority });
    this.sort();
  }

  public dequeue(): { val: T; priority: number } | undefined {
    return this.values.shift();
  }

  public isEmpty(): boolean {
    return this.values.length === 0;
  }

  private sort(): void {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class GraphForDijkstra {
  // 인접 리스트 (노드 -> { 이웃 노드, 가중치 })
  private adjacencyList: Map<string, { node: string; weight: number }[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  public addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList.get(vertex1)?.push({ node: vertex2, weight });
    // 무방향(양방향) 그래프일 경우 아래 주석 해제
    // this.adjacencyList.get(vertex2)?.push({ node: vertex1, weight });
  }

  public dijkstra(start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const pq = new PriorityQueue<string>();

    // 초기화
    this.adjacencyList.forEach((_, vertex) => {
      distances[vertex] = vertex === start ? 0 : Infinity;
      previous[vertex] = null;
    });

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
      const smallest = pq.dequeue();
      if (!smallest) break;

      const currentNode = smallest.val;

      // 인접 노드 순회
      const neighbors = this.adjacencyList.get(currentNode) || [];
      for (const neighbor of neighbors) {
        // 계산된 새로운 거리
        const candidateDistance = distances[currentNode] + neighbor.weight;

        // 기존의 거리보다 짧다면 갱신
        if (candidateDistance < distances[neighbor.node]) {
          distances[neighbor.node] = candidateDistance;
          previous[neighbor.node] = currentNode;
          
          // 큐에 추가
          pq.enqueue(neighbor.node, candidateDistance);
        }
      }
    }

    return distances;
  }
}

// --- 실행 테스트 ---
const graphForDijkstra = new GraphForDijkstra();
graphForDijkstra.addVertex("A");
graphForDijkstra.addVertex("B");
graphForDijkstra.addVertex("C");
graphForDijkstra.addVertex("D");
graphForDijkstra.addVertex("E");

graphForDijkstra.addEdge("A", "B", 4);
graphForDijkstra.addEdge("A", "C", 2);
graphForDijkstra.addEdge("B", "E", 3);
graphForDijkstra.addEdge("C", "D", 2);
graphForDijkstra.addEdge("C", "E", 4);
graphForDijkstra.addEdge("D", "E", 1);

console.log("A로부터 각 노드까지의 최단 거리:", graphForDijkstra.dijkstra("A"));
// 출력 예시: { A: 0, B: 4, C: 2, D: 4, E: 5 }