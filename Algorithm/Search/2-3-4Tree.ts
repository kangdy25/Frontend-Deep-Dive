// 1. 노드 구조 정의
class TNode {
  public keys: number[] = [];
  public children: TNode[] = [];
  public parent: TNode | null = null;

  constructor(key?: number) {
    if (key !== undefined) this.keys.push(key);
  }

  public isLeaf(): boolean {
    return this.children.length === 0;
  }

  public isFull(): boolean {
    return this.keys.length === 3; // 4-노드 상태
  }
}

class TwoThreeFourTree {
  private root: TNode = new TNode();

  // 2. 탐색 (Search)
  public find(key: number): boolean {
    let current = this.root;
    while (current) {
      const index = current.keys.findIndex((k) => key <= k);
      if (index !== -1 && current.keys[index] === key) return true;
      if (current.isLeaf()) break;

      // index가 -1이면 모든 키보다 크다는 뜻이므로 마지막 자식으로 이동
      current = current.children[index === -1 ? current.keys.length : index];
    }
    return false;
  }

  // 3. 삽입 (Insert)
  public insert(key: number): void {
    let current = this.root;

    // 루트가 4-노드라면 먼저 분할
    if (this.root.isFull()) {
      const newRoot = new TNode();
      newRoot.children.push(this.root);
      this.split(this.root, newRoot, 0);
      this.root = newRoot;
      current = newRoot;
    }

    while (!current.isLeaf()) {
      let i = 0;
      while (i < current.keys.length && key > current.keys[i]) i++;

      // 내려가기 전 자식이 4-노드라면 분할 (Preemptive Split)
      if (current.children[i].isFull()) {
        this.split(current.children[i], current, i);
        if (key > current.keys[i]) i++;
      }
      current = current.children[i];
    }

    // 리프 노드에 키 삽입 후 정렬
    current.keys.push(key);
    current.keys.sort((a, b) => a - b);
  }

  // 4. 분할 (Split) - 2-3-4 트리의 핵심 로직
  private split(fullNode: TNode, parent: TNode, index: number): void {
    // 4-노드의 중간값(index 1)을 부모로 올림
    const midKey = fullNode.keys[1];
    const rightNode = new TNode();

    // 오른쪽 자식 노드에게 키와 자식들을 배분
    rightNode.keys.push(fullNode.keys[2]);
    if (!fullNode.isLeaf()) {
      rightNode.children = fullNode.children.splice(2, 2);
    }

    // 기존 노드는 왼쪽 키만 남김
    fullNode.keys.splice(1, 2);

    // 부모 노드에 중간값과 새 자식 연결
    parent.keys.splice(index, 0, midKey);
    parent.children.splice(index + 1, 0, rightNode);
  }
}

// --- 실행 테스트 ---
const ttfTree = new TwoThreeFourTree();
[10, 20, 30, 40, 50].forEach((n) => ttfTree.insert(n));

console.log("40이 트리에 있나요?", ttfTree.find(40)); // true
console.log("60이 트리에 있나요?", ttfTree.find(60)); // false
