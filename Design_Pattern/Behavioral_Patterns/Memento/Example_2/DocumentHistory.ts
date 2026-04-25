import { DocumentMemento } from "./DocumentMemento";

export class DocumentHistory {
  private history: DocumentMemento[] = [];

  public push(memento: DocumentMemento): void {
    this.history.push(memento);
  }

  public pop(): DocumentMemento | undefined {
    return this.history.pop();
  }
}
