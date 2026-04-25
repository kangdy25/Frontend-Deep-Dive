import { UIComponent } from "./UIComponent";

export class Button implements UIComponent {
  constructor(private label: string) {}

  public render(): void {
    console.log(`Button: ${this.label}`);
  }

  // 리프 노드는 자식을 추가할 수 없으므로 에러를 던집니다.
  public add(component: UIComponent): void {
    throw new Error("Button cannot have child components.");
  }

  public remove(component: UIComponent): void {
    throw new Error("Button has no child components to remove.");
  }
}

export class TextBox implements UIComponent {
  constructor(private text: string) {}

  public render(): void {
    console.log(`TextBox: ${this.text}`);
  }

  public add(component: UIComponent): void {
    throw new Error("TextBox cannot have child components.");
  }

  public remove(component: UIComponent): void {
    throw new Error("TextBox has no child components to remove.");
  }
}
