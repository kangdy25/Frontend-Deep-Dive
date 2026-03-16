import { WeatherObserver } from "./Interfaces";

// 1. 현재 조건 디스플레이
export class CurrentConditionsDisplay implements WeatherObserver {
  update(temp: number, humidity: number, pressure: number): void {
    console.log(`Current: ${temp}F, ${humidity}% humidity`);
  }
}

// 2. 통계 디스플레이
export class StatisticsDisplay implements WeatherObserver {
  update(temp: number, humidity: number, pressure: number): void {
    console.log(`Avg/Max/Min temp: ${temp}/${temp + 2}/${temp - 2}`);
  }
}

// 3. 기상 예보 디스플레이
export class ForecastDisplay implements WeatherObserver {
  update(temp: number, humidity: number, pressure: number): void {
    console.log(`Forecast: ${pressure < 29.92 ? "Rain" : "Sunny"}`);
  }
}
