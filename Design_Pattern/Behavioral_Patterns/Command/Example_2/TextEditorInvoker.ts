import { Command } from "./Command";

export class TextEditorInvoker {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];

  public executeCommand(command: Command): void {
    command.execute();
    this.undoStack.push(command);
    // 새로운 명령이 실행되면 redo 기록은 초기화됩니다.
    this.redoStack = [];
  }

  public undo(): void {
    const command = this.undoStack.pop();
    if (command) {
      command.undo();
      this.redoStack.push(command);
    }
  }

  public redo(): void {
    const command = this.redoStack.pop();
    if (command) {
      command.execute();
      this.undoStack.push(command);
    }
  }
}
