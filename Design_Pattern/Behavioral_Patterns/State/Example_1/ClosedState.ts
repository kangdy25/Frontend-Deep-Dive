import { State } from "./State";
import { Door } from "./Door";
import { OpenState } from "./OpenState";

export class ClosedState implements State {
  public open(door: Door): void {
    console.log("Door is now Open.");
    door.setState(new OpenState()); // 상태 전환
  }

  public close(door: Door): void {
    console.log("Door is already Closed.");
  }
}
