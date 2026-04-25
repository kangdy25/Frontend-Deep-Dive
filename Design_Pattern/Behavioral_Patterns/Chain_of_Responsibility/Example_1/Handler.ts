export abstract class Handler {
  protected next: Handler | null = null;

  // 다음 처리기(Handler)를 연결합니다.
  public setNext(next: Handler): Handler {
    this.next = next;
    return next;
  }

  // 공통적인 처리 흐름을 정의합니다.
  public handle(number: number): void {
    this.process(number);
    if (this.next) {
      this.next.handle(number);
    }
  }

  protected abstract process(number: number): void;
}
