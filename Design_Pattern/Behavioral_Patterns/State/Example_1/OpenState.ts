import { State } from "./State";
import { Door } from "./Door";
import { ClosedState } from "./ClosedState";

export class OpenState implements State {
  public open(door: Door): void {
    console.log("Door is already Open.");
  }

  public close(door: Door): void {
    console.log("Door is now Closed.");
    door.setState(new ClosedState()); // 상태 전환
  }
}
