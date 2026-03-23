import { Editor } from "./Editor";

const editor = new Editor();

editor.write("Hello, ");
editor.write("this is Memento pattern. ");
console.log(editor.getContent());
// 출력: Hello, this is Memento pattern.

editor.undo();
console.log(editor.getContent());
// 출력: Hello, (마지막 문장이 취소됨)

editor.write("This is an example implemented in TypeScript.");
console.log(editor.getContent());
// 출력: Hello, This is an example implemented in TypeScript.
