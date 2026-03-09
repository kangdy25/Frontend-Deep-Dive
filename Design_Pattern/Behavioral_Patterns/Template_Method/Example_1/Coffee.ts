import { Beverage } from "./Beverage";

export class Coffee extends Beverage {
  protected brew(): void {
    console.log("Dripping coffee through filter");
  }

  protected addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}
