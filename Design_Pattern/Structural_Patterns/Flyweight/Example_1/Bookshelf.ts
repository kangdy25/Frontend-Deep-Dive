import { Book } from "./Book";

export class Bookshelf {
  // 생성된 객체들을 저장할 Map (캐시 역할)
  private static bookshelf: Map<string, Book> = new Map();

  public static getBook(title: string): Book {
    let book = this.bookshelf.get(title);

    if (!book) {
      // 없다면 새로 만들어서 저장
      book = new Book(title);
      this.bookshelf.set(title, book);
      console.log(`Adding a new book to the bookshelf: ${title}`);
    } else {
      // 있다면 기존 것 반환
      console.log(`Reusing existing book from the bookshelf: ${title}`);
    }

    return book;
  }
}
