import { MyList } from "./MyList";

const list = new MyList<string>(3);
list.add("A");
list.add("B");
list.add("C");

const iterator = list.createIterator();

// 자료구조 내부를 몰라도 while문 하나로 순회가 가능합니다.
while (iterator.hasNext()) {
  console.log(iterator.next());
}
