import { Logger } from "./Logger";

export class ConsoleLogger extends Logger {
  protected write(message: string): void {
    console.log(`Console::Logger: ${message}`);
  }
}

export class FileLogger extends Logger {
  protected write(message: string): void {
    console.log(`File::Logger: ${message}`);
  }
}

export class NetworkLogger extends Logger {
  protected write(message: string): void {
    console.log(`Network::Logger: ${message}`);
  }
}
