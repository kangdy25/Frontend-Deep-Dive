import { FileSystemElement, Visitor } from "./Interfaces";

export class File implements FileSystemElement {
  constructor(
    private name: string,
    private size: number,
  ) {}

  public getName(): string {
    return this.name;
  }
  public getSize(): number {
    return this.size;
  }

  public accept(visitor: Visitor): void {
    visitor.visitFile(this);
  }
}

export class Directory implements FileSystemElement {
  private elements: FileSystemElement[] = [];

  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public addElement(element: FileSystemElement): void {
    this.elements.push(element);
  }

  public getElements(): FileSystemElement[] {
    return this.elements;
  }

  public accept(visitor: Visitor): void {
    // 디렉토리 자신을 먼저 방문하게 합니다.
    visitor.visitDirectory(this);
  }
}
