class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(public value: T) {}
}

class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  // 1. 삽입 (Insert)
  public insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        // 왼쪽으로 이동
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        // 오른쪽으로 이동
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // 2. 탐색 (Search) - 이진 탐색과 원리가 똑같음!
  public find(value: T): boolean {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) return true;

      // 타겟이 현재보다 작으면 왼쪽으로, 크면 오른쪽으로!
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // 3. 삭제 (Delete)
  public delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  // 오른쪽 서브 트리에서 가장 왼쪽 끝(최솟값)까지 내려갑니다.
  private getMinValue(node: TreeNode<T>): T {
    let min = node.value;
    while (node.left !== null) {
      min = node.left.value;
      node = node.left;
    }
    return min;
  }

  private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) return null;

    // 1. 삭제할 노드 찾기 (탐색 로직과 동일)
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    }
    // 2. 삭제할 노드를 찾았을 때
    else {
      // Case 1 & 2: 자식이 없거나 하나인 경우
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Case 3: 자식이 둘인 경우
      // 오른쪽 서브 트리에서 가장 작은 노드(후계자)를 찾습니다.
      node.value = this.getMinValue(node.right);

      // 후계자 값을 복사했으니, 원래 위치에 있던 후계자 노드를 삭제합니다.
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }
}

// 실행 테스트
const bst = new BinarySearchTree<number>();
[25, 15, 50, 10, 22, 35, 70].forEach((n) => bst.insert(n));

console.log("50이 트리에 있나요?", bst.find(50)); // true
console.log("99가 트리에 있나요?", bst.find(99)); // false
