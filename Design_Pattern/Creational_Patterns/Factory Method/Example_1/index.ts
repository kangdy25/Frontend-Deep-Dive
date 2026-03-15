import { CarFactory, MotorcycleFactory } from "./Factories";

const carFactory = new CarFactory();
carFactory.deliverVehicle();

console.log("---");

const motorcycleFactory = new MotorcycleFactory();
motorcycleFactory.deliverVehicle();
