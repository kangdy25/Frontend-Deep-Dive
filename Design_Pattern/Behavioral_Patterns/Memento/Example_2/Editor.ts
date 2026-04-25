import { Document } from "./Document";
import { DocumentHistory } from "./DocumentHistory";

export class Editor {
  private document: Document = new Document();
  private history: DocumentHistory = new DocumentHistory();

  public write(text: string): void {
    // 글을 쓰기 전, 현재 상태를 먼저 세이브 포인트로 저장!
    this.history.push(this.document.save());
    this.document.write(text);
  }

  public undo(): void {
    const memento = this.history.pop();
    if (memento) {
      this.document.restore(memento);
    }
  }

  public getContent(): string {
    return this.document.getContent();
  }
}
