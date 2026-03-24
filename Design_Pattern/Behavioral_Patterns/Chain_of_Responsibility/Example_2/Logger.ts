export enum LogLevel {
  INFO = 1,
  DEBUG = 2,
  WARN = 3,
}

export abstract class Logger {
  protected nextLogger: Logger | null = null;
  protected level: LogLevel;

  constructor(level: LogLevel) {
    this.level = level;
  }

  public setNextLogger(nextLogger: Logger): void {
    this.nextLogger = nextLogger;
  }

  public logMessage(level: LogLevel, message: string): void {
    // 현재 로거의 레벨보다 높거나 같은 중요도의 메시지만 기록합니다.
    if (this.level <= level) {
      this.write(message);
    }

    // 다음 로거가 있다면 체인을 이어갑니다.
    if (this.nextLogger !== null) {
      this.nextLogger.logMessage(level, message);
    }
  }

  protected abstract write(message: string): void;
}
