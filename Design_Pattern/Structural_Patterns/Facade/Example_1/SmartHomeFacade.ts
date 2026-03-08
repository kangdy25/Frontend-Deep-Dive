import { Thermostat } from "./Thermostat";
import { Lights } from "./Lights";
import { CoffeeMaker } from "./CoffeeMaker";

export class SmartHomeFacade {
  private thermostat: Thermostat;
  private lights: Lights;
  private coffeeMaker: CoffeeMaker;

  constructor(
    thermostat: Thermostat,
    lights: Lights,
    coffeeMaker: CoffeeMaker,
  ) {
    this.thermostat = thermostat;
    this.lights = lights;
    this.coffeeMaker = coffeeMaker;
  }

  public wakeUp(): void {
    console.log("Waking up...");
    this.thermostat.setTemperature(22);
    this.lights.on();
    this.coffeeMaker.brewCoffee();
  }

  public leaveHome(): void {
    console.log("Leaving home...");
    this.thermostat.setTemperature(18);
    this.lights.off();
  }
}
