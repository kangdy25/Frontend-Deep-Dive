import { Bookshelf } from "./Bookshelf";

const book1 = Bookshelf.getBook("Effective Java");
book1.read();

const book2 = Bookshelf.getBook("Effective Java");
book2.read();

const book3 = Bookshelf.getBook("Clean Code");
book3.read();

console.log("\n--- Object Identity Check ---");
// 두 객체의 참조값이 같은지 확인
if (book1 === book2) {
  console.log("Same book for 'Effective Java'. (Memory saved!)");
} else {
  console.log("Different books for 'Effective Java'.");
}
