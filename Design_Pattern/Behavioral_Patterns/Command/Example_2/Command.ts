import { TextEditor } from "./TextEditor";

export interface Command {
  execute(): void;
  undo(): void;
}

export class InsertTextCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private position: number,
  ) {}

  public execute(): void {
    this.editor.insertText(this.text, this.position);
  }

  public undo(): void {
    this.editor.deleteText(this.position, this.text.length);
  }
}

export class DeleteTextCommand implements Command {
  private deletedText: string;

  constructor(
    private editor: TextEditor,
    private position: number,
    length: number,
  ) {
    // 삭제 전 미리 텍스트를 백업해두어야 undo가 가능합니다.
    this.deletedText = this.editor.getTextSubstring(
      position,
      position + length,
    );
  }

  public execute(): void {
    this.editor.deleteText(this.position, this.deletedText.length);
  }

  public undo(): void {
    this.editor.insertText(this.deletedText, this.position);
  }
}
