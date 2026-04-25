import { FileSystemComponent } from "./FileSystemComponent";

export class File implements FileSystemComponent {
  constructor(
    private name: string,
    private size: number,
  ) {}

  public printName(): void {
    console.log(`File: ${this.name}`);
  }

  public getSize(): number {
    return this.size;
  }

  public getName(): string {
    return this.name;
  }
}
