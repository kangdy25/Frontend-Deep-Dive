import { Light } from "./Receiver";

// Command 인터페이스
export interface Command {
  execute(): void;
}

// 불 켜기 명령
export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOn();
  }
}

// 불 끄기 명령
export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff();
  }
}
