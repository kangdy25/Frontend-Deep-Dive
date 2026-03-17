export class Book {
  // 공유되는 상태 (내재적 상태, Intrinsic State)
  private readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  public read(): void {
    console.log(`Reading the book titled: ${this.title}`);
  }
}
