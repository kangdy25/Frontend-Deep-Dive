import { TextEditor } from "./TextEditor";
import { TextEditorInvoker } from "./TextEditorInvoker";
import { InsertTextCommand, DeleteTextCommand } from "./Command";

const editor = new TextEditor();
const invoker = new TextEditorInvoker();

// 1. "Hello, " 삽입
invoker.executeCommand(new InsertTextCommand(editor, "Hello, ", 0));

// 2. "World!" 삽입
invoker.executeCommand(new InsertTextCommand(editor, "World!", 7));
console.log(`Current text: ${editor.getContent()}`); // Hello, World!

// 3. Undo 실행
invoker.undo();
console.log(`After undo: ${editor.getContent()}`); // Hello,

// 4. Redo 실행
invoker.redo();
console.log(`After redo: ${editor.getContent()}`); // Hello, World!

// 5. 0번 위치에서 7글자("Hello, ") 삭제
invoker.executeCommand(new DeleteTextCommand(editor, 0, 7));
console.log(`After delete: ${editor.getContent()}`); // World!

// 6. Undo 실행 (삭제 취소)
invoker.undo();
console.log(`Final text: ${editor.getContent()}`); // Hello, World!
