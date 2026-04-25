import { GameMemento } from "./GameMemento";

export class GameCaretaker {
  private mementoList: GameMemento[] = [];

  public add(state: GameMemento): void {
    this.mementoList.push(state);
  }

  public get(index: number): GameMemento | undefined {
    return this.mementoList[index];
  }
}
