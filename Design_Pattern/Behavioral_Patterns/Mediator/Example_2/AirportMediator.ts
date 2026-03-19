export interface AirportMediator {
  isRunwayAvailable(): boolean;
  setRunwayAvailability(status: boolean): void;
}

export class AirportControlTower implements AirportMediator {
  private _isRunwayAvailable: boolean = true;

  public isRunwayAvailable(): boolean {
    return this._isRunwayAvailable;
  }

  public setRunwayAvailability(status: boolean): void {
    this._isRunwayAvailable = status;
  }
}
