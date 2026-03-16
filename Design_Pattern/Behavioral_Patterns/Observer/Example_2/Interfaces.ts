export interface WeatherObserver {
  // 온도, 습도, 기압 정보를 전달받는 인터페이스
  update(temp: number, humidity: number, pressure: number): void;
}

export interface WeatherStation {
  registerObserver(o: WeatherObserver): void;
  removeObserver(o: WeatherObserver): void;
  notifyObservers(): void;
}
