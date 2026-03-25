// 반복자 인터페이스
export interface MyIterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

// 집합체 인터페이스
export interface MyCollection<T> {
  createIterator(): MyIterator<T>;
}
