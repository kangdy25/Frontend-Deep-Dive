import { MyIterator } from "./Interfaces";
import { MyList } from "./MyList";

export class MyListIterator<T> implements MyIterator<T> {
  private index: number = 0;

  constructor(private list: MyList<T>) {}

  public hasNext(): boolean {
    return this.index < this.list.size();
  }

  public next(): T | null {
    if (this.hasNext()) {
      return this.list.get(this.index++);
    }
    return null;
  }
}
