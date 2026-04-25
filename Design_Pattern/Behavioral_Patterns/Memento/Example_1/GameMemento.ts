export class GameMemento {
  constructor(
    private readonly level: string,
    private readonly score: number,
  ) {}

  public getLevel(): string {
    return this.level;
  }

  public getScore(): number {
    return this.score;
  }
}
