import { File, Directory } from "./FileSystem";
import { SizeCalculatorVisitor, FileSearchVisitor } from "./Visitors";

// 파일 시스템 구성
const file1 = new File("file1.txt", 100);
const file2 = new File("file2.txt", 200);
const file3 = new File("file3.txt", 300);

const dir1 = new Directory("Folder1");
dir1.addElement(file1);
dir1.addElement(file2);

const dir2 = new Directory("Folder2");
dir2.addElement(file3);

const rootDir = new Directory("Root");
rootDir.addElement(dir1);
rootDir.addElement(dir2);

// 연산 1: 전체 용량 계산
const sizeVisitor = new SizeCalculatorVisitor();
rootDir.accept(sizeVisitor);
console.log(`Total size: ${sizeVisitor.getTotalSize()} bytes`);

// 연산 2: 파일 검색
const searchVisitor = new FileSearchVisitor("file3.txt");
rootDir.accept(searchVisitor);
const found = searchVisitor.getFoundFile();

if (found) {
  console.log(`File found: ${found.getName()}, Size: ${found.getSize()} bytes`);
} else {
  console.log("File not found.");
}
