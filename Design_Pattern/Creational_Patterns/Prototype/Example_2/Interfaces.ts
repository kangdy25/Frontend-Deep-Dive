export interface Prototype {
  clone(): Prototype;
}

// Prototype을 상속받는 Document 인터페이스
export interface Document extends Prototype {
  setContent(content: string): void;
  getContent(): string;
  clone(): Document; // 리턴 타입을 구체화해줍니다.
}
