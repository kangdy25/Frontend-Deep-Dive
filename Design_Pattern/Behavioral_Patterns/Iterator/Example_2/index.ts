import { FileItem, DirectoryItem } from "./FileSystemItem";
import { DepthFirstIterator, BreadthFirstIterator } from "./Iterators";

// 트리 구조 생성
const root = new DirectoryItem("root");
const home = new DirectoryItem("home");
const user = new DirectoryItem("user");
const file1 = new FileItem("file1.txt");
const file2 = new FileItem("file2.txt");
const file3 = new FileItem("file3.txt");

root.add(home);
home.add(user);
user.add(file1);
user.add(file2);
home.add(file3);

// 1. DFS 테스트
console.log("--- Depth-First Traversal ---");
const depthIterator = new DepthFirstIterator(root);
while (depthIterator.hasNext()) {
  console.log(depthIterator.next().getName());
}

// 2. BFS 테스트
console.log("\n--- Breadth-First Traversal ---");
const breadthIterator = new BreadthFirstIterator(root);
while (breadthIterator.hasNext()) {
  console.log(breadthIterator.next().getName());
}
