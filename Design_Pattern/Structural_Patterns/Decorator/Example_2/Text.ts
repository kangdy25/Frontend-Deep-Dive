// Component 인터페이스
export interface Text {
  getContent(): string;
}

// ConcreteComponent 클래스: 실제 텍스트 데이터 보유
export class PlainText implements Text {
  constructor(private content: string) {}

  public getContent(): string {
    return this.content;
  }
}
