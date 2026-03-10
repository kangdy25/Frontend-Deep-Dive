import { State } from "./State";
import { StoppedState } from "./StoppedState";

export class VideoPlayer {
  private state: State;

  constructor() {
    // 초기 상태는 정지 상태
    this.state = new StoppedState();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public play(): void {
    this.state.play(this);
  }

  public stop(): void {
    this.state.stop(this);
  }
}
