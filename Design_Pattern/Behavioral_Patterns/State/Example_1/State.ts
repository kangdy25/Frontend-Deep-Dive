import { Door } from "./Door";

export interface State {
  open(door: Door): void;
  close(door: Door): void;
}
