import { AirportMediator } from "./AirportMediator";

export class Flight {
  constructor(
    private mediator: AirportMediator,
    private flightNumber: string,
  ) {}

  public land(): void {
    if (this.mediator.isRunwayAvailable()) {
      console.log(`Flight ${this.flightNumber} is landing.`);
      // 착륙하면서 활주로를 점유함
      this.mediator.setRunwayAvailability(false);
    } else {
      console.log(`Flight ${this.flightNumber} is waiting to land.`);
    }
  }
}
