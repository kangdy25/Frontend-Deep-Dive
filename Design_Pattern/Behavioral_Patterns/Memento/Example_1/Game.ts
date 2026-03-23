import { GameMemento } from "./GameMemento";

export class Game {
  private level: string = "";
  private score: number = 0;

  public set(level: string, score: number): void {
    this.level = level;
    this.score = score;
    console.log(`Game state set to - Level: ${level}, Score: ${score}`);
  }

  // 현재 상태를 메멘토 객체에 담아 반환 (저장하기)
  public save(): GameMemento {
    return new GameMemento(this.level, this.score);
  }

  // 전달받은 메멘토 객체로부터 상태를 복구 (불러오기)
  public restore(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.score = memento.getScore();
    console.log(
      `Game state restored to - Level: ${this.level}, Score: ${this.score}`,
    );
  }
}
