import { DisplayAdapter } from "./DisplayAdapter";
import { USB, HDMI, VGA } from "./Adaptees";

export class USBAdapter implements DisplayAdapter {
  constructor(
    private usb: USB,
    private data: string,
  ) {}

  display(): void {
    this.usb.connectWithUsbCable(this.data);
  }
}

export class HDMIAdapter implements DisplayAdapter {
  constructor(
    private hdmi: HDMI,
    private resolution: number,
  ) {}

  display(): void {
    this.hdmi.connectWithHdmiCable(this.resolution);
  }
}

export class VGAAdapter implements DisplayAdapter {
  constructor(
    private vga: VGA,
    private highQuality: boolean,
  ) {}

  display(): void {
    this.vga.connectWithVgaCable(this.highQuality);
  }
}
