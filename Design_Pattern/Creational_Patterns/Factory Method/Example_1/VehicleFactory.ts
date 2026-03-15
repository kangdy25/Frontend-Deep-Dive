import { Vehicle } from "./Vehicle";

export abstract class VehicleFactory {
  // Factory Method: 자식 클래스가 어떤 객체를 만들지 결정하도록 추상화합니다.
  abstract createVehicle(): Vehicle;

  // 공통 로직: 객체를 만들고 배달하는 흐름은 부모가 정의합니다.
  public deliverVehicle(): void {
    const vehicle = this.createVehicle();
    console.log("Delivering the vehicle:");
    vehicle.drive();
  }
}
