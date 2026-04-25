// 1. 노드 색상 정의
enum Color {
  RED,
  BLACK,
}

// 2. 노드 구조 정의
class RBNode<T> {
  public left: RBNode<T> | null = null;
  public right: RBNode<T> | null = null;
  public parent: RBNode<T> | null = null;
  public color: Color = Color.RED; // 새 노드는 항상 RED로 시작

  constructor(public value: T) {}
}

class RedBlackTree<T> {
  private root: RBNode<T> | null = null;

  // 3. 탐색 (Search) - 일반 BST와 동일
  public find(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // 4. 삽입 (Insert)
  public insert(value: T): void {
    const newNode = new RBNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.treeInsert(this.root, newNode);
    }
    // 삽입 후 망가진 규칙을 바로잡음
    this.fixupInsert(newNode);
    this.root!.color = Color.BLACK; // 규칙 2: 루트는 항상 BLACK
  }

  // 일반 BST 삽입 로직 (부모 연결 추가)
  private treeInsert(root: RBNode<T>, newNode: RBNode<T>): void {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
        newNode.parent = root;
      } else {
        this.treeInsert(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
        newNode.parent = root;
      } else {
        this.treeInsert(root.right, newNode);
      }
    }
  }

  // 5. 균형 조정 로직 (핵심)
  private fixupInsert(node: RBNode<T>): void {
    // 부모가 RED일 때만 조정 (Double Red 위반 상태)
    while (node.parent && node.parent.color === Color.RED) {
      let grandParent = node.parent.parent!;

      // 부모가 할아버지의 왼쪽 자식인 경우
      if (node.parent === grandParent.left) {
        let uncle = grandParent.right;

        // Case 1: 삼촌도 RED인 경우 (Recoloring) -> 2-3-4 트리의 Split에 해당
        if (uncle && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent.color = Color.RED;
          node = grandParent; // 할아버지 단계에서 다시 검사
        }
        // 삼촌이 BLACK이거나 없는 경우 (회전)
        else {
          // Case 2: 노드가 부모의 오른쪽 자식 (LR 형태) -> 1차 회전으로 Case 3으로 만듦
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          // Case 3: 노드가 부모의 왼쪽 자식 (LL 형태) -> 회전 및 색상 변경
          node.parent!.color = Color.BLACK;
          grandParent.color = Color.RED;
          this.rotateRight(grandParent);
        }
      }
      // 부모가 할아버지의 오른쪽 자식인 경우 (위 로직의 대칭)
      else {
        let uncle = grandParent.left;
        if (uncle && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          grandParent.color = Color.RED;
          node = grandParent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent!.color = Color.BLACK;
          grandParent.color = Color.RED;
          this.rotateLeft(grandParent);
        }
      }
    }
  }

  // 6. 우회전 (Right Rotation)
  private rotateRight(node: RBNode<T>): void {
    let leftChild = node.left!;
    node.left = leftChild.right;
    if (leftChild.right) leftChild.right.parent = node;
    leftChild.parent = node.parent;
    if (!node.parent) this.root = leftChild;
    else if (node === node.parent.right) node.parent.right = leftChild;
    else node.parent.left = leftChild;
    leftChild.right = node;
    node.parent = leftChild;
  }

  // 7. 좌회전 (Left Rotation) - 우회전의 대칭
  private rotateLeft(node: RBNode<T>): void {
    let rightChild = node.right!;
    node.right = rightChild.left;
    if (rightChild.left) rightChild.left.parent = node;
    rightChild.parent = node.parent;
    if (!node.parent) this.root = rightChild;
    else if (node === node.parent.left) node.parent.left = rightChild;
    else node.parent.right = rightChild;
    rightChild.left = node;
    node.parent = rightChild;
  }
}

// --- 실행 테스트 ---
const rbTree = new RedBlackTree<number>();
[10, 20, 30, 40, 50].forEach((n) => rbTree.insert(n));

console.log("30이 트리에 있나요?", rbTree.find(30)); // true
console.log("60이 트리에 있나요?", rbTree.find(60)); // false
