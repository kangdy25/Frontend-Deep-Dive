import { Text, PlainText } from "./Text";
import {
  BoldDecorator,
  ItalicDecorator,
  UnderlineDecorator,
} from "./TextDecorator";

// 1. 단계별로 장식하기
let text: Text = new PlainText("Hello, Decorator Pattern!");
console.log("Plain text: " + text.getContent());

text = new BoldDecorator(text);
console.log("Bold text: " + text.getContent());

text = new ItalicDecorator(text);
console.log("Bold and italic text: " + text.getContent());

text = new UnderlineDecorator(text);
console.log("Bold, italic, and underlined text: " + text.getContent());

console.log("---");

// 2. 한 번에 감싸서 생성하기
const anotherText = new UnderlineDecorator(
  new ItalicDecorator(new PlainText("Another example")),
);
console.log("Underlined and italic text: " + anotherText.getContent());
