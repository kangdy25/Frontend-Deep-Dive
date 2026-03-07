export {};

// ⛔️ DIP를 위반한 코드

class Fan {
  public spin(): void {
    console.log("Fan is spinning");
  }

  public stop(): void {
    console.log("Fan is stopping");
  }
}

class Switch {
  private fan: Fan;

  constructor(fan: Fan) {
    this.fan = fan;
  }

  public turnOn(): void {
    this.fan.spin();
  }

  public turnOff(): void {
    this.fan.stop();
  }
}

const fan = new Fan();
const fanSwitch = new Switch(fan);
fanSwitch.turnOn();
