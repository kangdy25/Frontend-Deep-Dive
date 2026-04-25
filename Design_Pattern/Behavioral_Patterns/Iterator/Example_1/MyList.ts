import { MyCollection, MyIterator } from "./Interfaces";
import { MyListIterator } from "./MyListIterator";

export class MyList<T> implements MyCollection<T> {
  private items: T[] = [];

  constructor(size: number) {}

  public add(item: T): void {
    this.items.push(item);
  }

  public get(index: number): T {
    return this.items[index];
  }

  public size(): number {
    return this.items.length;
  }

  public createIterator(): MyIterator<T> {
    return new MyListIterator<T>(this);
  }
}
