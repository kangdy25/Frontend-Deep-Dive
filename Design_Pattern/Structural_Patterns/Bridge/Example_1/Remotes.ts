import { Remote } from "./Remote";
import { Device } from "./Device";

export class BasicRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  power(): void {
    if (this.device.isEnabled()) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }
}

export class AdvancedRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  power(): void {
    if (this.device.isEnabled()) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }

  mute(): void {
    this.device.setVolume(0);
    console.log("Device is muted.");
  }
}
