import { Device } from "./Device";

export class TV implements Device {
  private on = false;
  private volume = 30;

  turnOn(): void {
    this.on = true;
    console.log("TV is now ON.");
  }
  turnOff(): void {
    this.on = false;
    console.log("TV is now OFF.");
  }
  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`TV volume set to ${volume}`);
  }
  isEnabled(): boolean {
    return this.on;
  }
}

export class Radio implements Device {
  private on = false;
  private volume = 30;

  turnOn(): void {
    this.on = true;
    console.log("Radio is now ON.");
  }
  turnOff(): void {
    this.on = false;
    console.log("Radio is now OFF.");
  }
  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`Radio volume set to ${volume}`);
  }
  isEnabled(): boolean {
    return this.on;
  }
}
