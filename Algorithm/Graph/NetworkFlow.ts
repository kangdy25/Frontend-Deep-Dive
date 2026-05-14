// 포드-풀커슨(Ford-Fulkerson) 알고리즘

// 정점과 그래프 타입을 명확히 정의합니다.
type Node = number;
// 인접 행렬 방식: graph[u][v]는 u에서 v로 갈 수 있는 용량(Capacity)을 의미합니다.
type Graph = number[][];

class EdmondsKarp {
  private residualGraph: Graph;
  private V: number;

  constructor(graph: Graph) {
    // 원본 그래프의 깊은 복사본을 만들어 잔여 용량(Residual Capacity) 그래프로 사용합니다.
    this.residualGraph = graph.map((row) => [...row]);
    this.V = graph.length;
  }

  /**
   * BFS를 사용하여 Source에서 Sink로 가는 증가 경로(Augmenting Path)를 찾습니다.
   * @param source 시작점
   * @param sink 도착점
   * @param parent 경로를 역추적하기 위해 각 정점의 부모를 저장하는 배열
   * @returns 경로를 찾았으면 true, 없으면 false
   */
  private bfs(source: Node, sink: Node, parent: Node[]): boolean {
    const visited = new Array(this.V).fill(false);
    const queue: Node[] = [];

    queue.push(source);
    visited[source] = true;
    parent[source] = -1;

    while (queue.length > 0) {
      const u = queue.shift()!;

      for (let v = 0; v < this.V; v++) {
        // 방문하지 않았고, 해당 파이프에 보낼 수 있는 잔여 용량이 남아있는(> 0) 경우만 탐색
        if (!visited[v] && this.residualGraph[u][v] > 0) {
          if (v === sink) {
            parent[v] = u;
            return true; // 도착지에 도달하면 즉시 종료 (경로 발견)
          }
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }
    return false; // 더 이상 S에서 T로 가는 경로가 없음
  }

  /**
   * 네트워크의 최대 유량을 계산합니다.
   */
  public getMaxFlow(source: Node, sink: Node): number {
    const parent: Node[] = new Array(this.V).fill(-1);
    let maxFlow = 0;

    // BFS로 증가 경로를 찾을 수 있는 동안 계속 반복합니다.
    while (this.bfs(source, sink, parent)) {
      let pathFlow = Infinity;

      // 1. 병목(Bottleneck) 찾기: 찾은 경로 중 가장 좁은 폭(최소 잔여 용량)을 구합니다.
      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];
        pathFlow = Math.min(pathFlow, this.residualGraph[u][v]);
      }

      // 2. 유량 흘려보내기 & 역방향 간선 갱신 (핵심 로직)
      for (let v = sink; v !== source; v = parent[v]) {
        const u = parent[v];

        // 순방향 간선: 보낸 물의 양만큼 잔여 용량이 줄어듭니다.
        this.residualGraph[u][v] -= pathFlow;

        // 역방향 간선: 보낸 물의 양만큼 취소할 수 있는 가상의 용량(Back Edge)이 늘어납니다.
        this.residualGraph[v][u] += pathFlow;
      }

      // 3. 전체 최대 유량에 이번 경로에서 보낸 물의 양을 더합니다.
      maxFlow += pathFlow;
    }

    return maxFlow;
  }
}

// --- 실행 예제 ---
// 앞서 시각화에서 본 그래프: S(0), A(1), B(2), T(3)
const graph: Graph = [
  // S  A  B  T
  [0, 2, 1, 0], // 0(S)에서 나가는 간선: S->A(2), S->B(1)
  [0, 0, 2, 1], // 1(A)에서 나가는 간선: A->B(2), A->T(1)
  [0, 0, 0, 2], // 2(B)에서 나가는 간선: B->T(2)
  [0, 0, 0, 0], // 3(T)에서 나가는 간선: 없음
];

const maxFlowFinder = new EdmondsKarp(graph);
const sourceNode = 0; // S
const sinkNode = 3; // T

const result = maxFlowFinder.getMaxFlow(sourceNode, sinkNode);
console.log(`네트워크의 최대 유량은 ${result} 입니다.`);
// 출력 결과: 네트워크의 최대 유량은 3 입니다.
