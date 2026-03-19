import { AirportMediator } from "./AirportMediator";

export class Runway {
  constructor(private mediator: AirportMediator) {}

  public clear(): void {
    console.log("Runway is clear.");
    // 활주로가 비었음을 관제탑에 알림
    this.mediator.setRunwayAvailability(true);
  }
}
