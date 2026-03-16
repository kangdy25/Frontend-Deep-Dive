import { WeatherStation, WeatherObserver } from "./Interfaces";

export class WeatherData implements WeatherStation {
  private observers: WeatherObserver[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  // 기상 정보를 갱신하고 옵저버들에게 알립니다.
  public setMeasurements(
    temp: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }

  public registerObserver(o: WeatherObserver): void {
    this.observers.push(o);
  }

  public removeObserver(o: WeatherObserver): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }
}
