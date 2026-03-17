import { Font } from "./Font";

export class ConcreteFont implements Font {
  // 내재적 상태: 공유되는 속성들
  constructor(
    private font: string,
    private size: number,
    private color: string,
  ) {}

  public apply(text: string): void {
    console.log(
      `Text: '${text}' with Font: ${this.font}, Size: ${this.size}, Color: ${this.color}`,
    );
  }
}
