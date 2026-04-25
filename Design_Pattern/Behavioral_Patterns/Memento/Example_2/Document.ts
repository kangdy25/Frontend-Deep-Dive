import { DocumentMemento } from "./DocumentMemento";

export class Document {
  private content: string = "";

  public write(text: string): void {
    this.content += text;
  }

  public getContent(): string {
    return this.content;
  }

  // 현재 상태를 스냅샷(메멘토)으로 찍어서 반환합니다.
  public save(): DocumentMemento {
    return new DocumentMemento(this.content);
  }

  // 과거의 메멘토를 받아 현재 상태를 되돌립니다.
  public restore(memento: DocumentMemento): void {
    this.content = memento.getContent();
  }
}
