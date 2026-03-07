export {};

// ✅ DIP를 적용한 코드

interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class Fan implements Switchable {
  public turnOn(): void {
    console.log("Fan is spinning");
  }

  public turnOff(): void {
    console.log("Fan is stopping");
  }
}

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  public turnOn(): void {
    this.device.turnOn();
  }

  public turnOff(): void {
    this.device.turnOff();
  }
}

// --- 실행부 ---
const fan = new Fan();
const fanSwitch = new Switch(fan);

fanSwitch.turnOn();
fanSwitch.turnOff();
