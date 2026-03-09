import { Beverage } from "./Beverage";

export class Tea extends Beverage {
  protected brew(): void {
    console.log("Steeping the tea");
  }

  protected addCondiments(): void {
    console.log("Adding lemon");
  }
}
