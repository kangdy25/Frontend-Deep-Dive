class BTreeNode {
  public keys: number[] = [];
  public children: BTreeNode[] = [];
  public isLeaf: boolean;

  constructor(isLeaf: boolean = true) {
    this.isLeaf = isLeaf;
  }
}

class BTree {
  private root: BTreeNode;
  private readonly M: number; // 차수 (Order)

  constructor(order: number) {
    this.root = new BTreeNode(true);
    this.M = order;
  }

  // 1. 탐색 (Search)
  public search(key: number, node: BTreeNode = this.root): BTreeNode | null {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) i++;

    if (i < node.keys.length && key === node.keys[i]) return node;
    if (node.isLeaf) return null;

    return this.search(key, node.children[i]);
  }

  // 2. 삽입 (Insert)
  public insert(key: number): void {
    const root = this.root;
    // 루트가 가득 찼을 경우 (M-1개)
    if (root.keys.length === this.M - 1) {
      const newRoot = new BTreeNode(false);
      newRoot.children.push(this.root);
      this.splitChild(newRoot, 0, this.root);
      this.root = newRoot;
    }
    this.insertNonFull(this.root, key);
  }

  private insertNonFull(node: BTreeNode, key: number): void {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // 리프 노드에 자리 잡기
      node.keys.push(0);
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      // 적절한 자식 노드로 내려가기
      while (i >= 0 && key < node.keys[i]) i--;
      i++;

      if (node.children[i].keys.length === this.M - 1) {
        this.splitChild(node, i, node.children[i]);
        if (key > node.keys[i]) i++;
      }
      this.insertNonFull(node.children[i], key);
    }
  }

  // 3. 분할 (Split) - B-Tree의 핵심
  private splitChild(
    parent: BTreeNode,
    index: number,
    fullNode: BTreeNode,
  ): void {
    const midIndex = Math.floor((this.M - 1) / 2);
    const newNode = new BTreeNode(fullNode.isLeaf);

    // 중간값 이후의 키들을 새 노드로 복사
    const midKey = fullNode.keys[midIndex];
    newNode.keys = fullNode.keys.splice(midIndex + 1);
    fullNode.keys.pop(); // 중간값 제거

    // 자식들도 분할
    if (!fullNode.isLeaf) {
      newNode.children = fullNode.children.splice(midIndex + 1);
    }

    // 부모 노드에 중간값과 새 자식 연결
    parent.keys.splice(index, 0, midKey);
    parent.children.splice(index + 1, 0, newNode);
  }
}

// --- 실행 테스트 ---
const bTree = new BTree(3); // 3차 B-Tree
[10, 20, 5, 6, 12, 30].forEach((k) => bTree.insert(k));

console.log("30 탐색 결과:", bTree.search(30) ? "찾음" : "못 찾음");
