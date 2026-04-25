export class DocumentMemento {
  // 생성 시점에만 값을 넣고 이후에는 절대 수정할 수 없도록 합니다.
  constructor(private readonly content: string) {}

  public getContent(): string {
    return this.content;
  }
}
