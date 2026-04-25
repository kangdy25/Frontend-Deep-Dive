import { FileSystemComponent } from "./FileSystemComponent";

export class Directory implements FileSystemComponent {
  private components: FileSystemComponent[] = [];

  constructor(private name: string) {}

  public add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public remove(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  // 이름으로 삭제하는 기능
  public removeByName(name: string): void {
    this.components = this.components.filter(
      (component) => component.getName() !== name,
    );
  }

  public printName(): void {
    console.log(`Directory: ${this.name}`);
    // 자식들에게 출력을 위임 (재귀적 호출)
    for (const component of this.components) {
      component.printName();
    }
  }

  public getSize(): number {
    // 자식들의 사이즈를 합산 (재귀적 호출)
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0,
    );
  }

  public getName(): string {
    return this.name;
  }
}
