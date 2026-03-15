import { VehicleFactory } from "./VehicleFactory";
import { Vehicle } from "./Vehicle";
import { Car, Motorcycle } from "./Vehicles";

export class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

export class MotorcycleFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Motorcycle();
  }
}
