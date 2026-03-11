export class USB {
  connectWithUsbCable(data: string): void {
    console.log(`Displaying via USB with data: ${data}`);
  }
}

export class HDMI {
  connectWithHdmiCable(resolution: number): void {
    console.log(`Displaying via HDMI with resolution: ${resolution}p`);
  }
}

export class VGA {
  connectWithVgaCable(highQuality: boolean): void {
    console.log(`Displaying via VGA with high quality: ${highQuality}`);
  }
}
