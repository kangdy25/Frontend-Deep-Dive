import { Visitor } from "./Interfaces";
import { File, Directory } from "./FileSystem";

// 1. 전체 용량 계산 방문자
export class SizeCalculatorVisitor implements Visitor {
  private totalSize: number = 0;

  public visitFile(file: File): void {
    this.totalSize += file.getSize();
  }

  public visitDirectory(directory: Directory): void {
    // 디렉토리 내부의 모든 요소를 다시 방문(재귀적 구조)
    for (const element of directory.getElements()) {
      element.accept(this);
    }
  }

  public getTotalSize(): number {
    return this.totalSize;
  }
}

// 2. 파일 이름 검색 방문자
export class FileSearchVisitor implements Visitor {
  private foundFile: File | null = null;

  constructor(private searchFileName: string) {}

  public visitFile(file: File): void {
    if (file.getName() === this.searchFileName) {
      this.foundFile = file;
    }
  }

  public visitDirectory(directory: Directory): void {
    for (const element of directory.getElements()) {
      // 이미 찾았다면 더 이상 탐색하지 않도록 최적화 가능
      if (this.foundFile) break;
      element.accept(this);
    }
  }

  public getFoundFile(): File | null {
    return this.foundFile;
  }
}
