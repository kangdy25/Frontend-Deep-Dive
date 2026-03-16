import { WeatherData } from "./WeatherData";
import {
  CurrentConditionsDisplay,
  StatisticsDisplay,
  ForecastDisplay,
} from "./Displays";

const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();
const forecastDisplay = new ForecastDisplay();

// 모든 디스플레이를 기상 스테이션에 등록 (구독)
weatherData.registerObserver(currentDisplay);
weatherData.registerObserver(statisticsDisplay);
weatherData.registerObserver(forecastDisplay);

// 기상 데이터 업데이트 -> 모든 디스플레이에 알림 전송!
console.log("--- First Weather Update ---");
weatherData.setMeasurements(80, 65, 30.4);

console.log("\n--- Second Weather Update ---");
weatherData.setMeasurements(72, 70, 29.2);
