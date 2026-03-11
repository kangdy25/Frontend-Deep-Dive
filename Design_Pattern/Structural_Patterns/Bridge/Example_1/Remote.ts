import { Device } from "./Device";

export abstract class Remote {
  constructor(protected device: Device) {}

  abstract power(): void;

  volumeUp(): void {
    this.device.setVolume(this.device.isEnabled() ? 1 : 0);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.isEnabled() ? -1 : 0);
  }
}
