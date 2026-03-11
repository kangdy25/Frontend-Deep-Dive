export interface Device {
  turnOn(): void;
  turnOff(): void;
  setVolume(volume: number): void;
  isEnabled(): boolean;
}
