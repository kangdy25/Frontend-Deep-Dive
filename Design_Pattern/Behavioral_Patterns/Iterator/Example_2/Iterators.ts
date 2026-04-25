import { FileSystemItem, DirectoryItem } from "./FileSystemItem";

export interface FileSystemIterator {
  hasNext(): boolean;
  next(): FileSystemItem;
}

// 1. 깊이 우선 순회 (DFS) - Stack 사용
export class DepthFirstIterator implements FileSystemIterator {
  private stack: FileSystemItem[] = [];

  constructor(root: DirectoryItem) {
    this.stack.push(root);
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  next(): FileSystemItem {
    const current = this.stack.pop();
    if (!current) throw new Error("No such element");

    if (current instanceof DirectoryItem) {
      const contents = current.getContents();
      // 스택이므로 역순으로 넣어야 먼저 들어간 게 먼저 나옵니다.
      for (let i = contents.length - 1; i >= 0; i--) {
        this.stack.push(contents[i]);
      }
    }
    return current;
  }
}

// 2. 너비 우선 순회 (BFS) - Queue(Array.shift) 사용
export class BreadthFirstIterator implements FileSystemIterator {
  private queue: FileSystemItem[] = [];

  constructor(root: DirectoryItem) {
    this.queue.push(root);
  }

  hasNext(): boolean {
    return this.queue.length > 0;
  }

  next(): FileSystemItem {
    const current = this.queue.shift(); // 큐처럼 앞에서 꺼냅니다.
    if (!current) throw new Error("No such element");

    if (current instanceof DirectoryItem) {
      this.queue.push(...current.getContents());
    }
    return current;
  }
}
