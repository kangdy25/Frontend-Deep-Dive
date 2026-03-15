import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

export class Motorcycle implements Vehicle {
  drive(): void {
    console.log("Riding a motorcycle");
  }
}
