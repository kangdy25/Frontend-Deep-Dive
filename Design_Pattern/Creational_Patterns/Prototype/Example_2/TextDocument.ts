import { Document } from "./Interfaces";

export class TextDocument implements Document {
  constructor(private content: string) {}

  public setContent(content: string): void {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  // 자신과 동일한 내용을 가진 새 객체를 생성하여 반환합니다.
  public clone(): Document {
    return new TextDocument(this.content);
  }
}
