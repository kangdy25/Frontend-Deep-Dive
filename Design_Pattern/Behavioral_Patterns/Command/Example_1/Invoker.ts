import { Command } from "./Command";

export class RemoteControl {
  private command?: Command;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public pressButton(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log("No command set!");
    }
  }
}
