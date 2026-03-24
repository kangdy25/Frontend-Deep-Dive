import { LogLevel, Logger } from "./Logger";
import { ConsoleLogger, FileLogger, NetworkLogger } from "./ConcreteLoggers";

function getChainOfLoggers(): Logger {
  // 1. 각 로거의 최소 처리 레벨을 설정하며 생성
  const networkLogger = new NetworkLogger(LogLevel.WARN); // WARN 이상만
  const fileLogger = new FileLogger(LogLevel.DEBUG); // DEBUG 이상만
  const consoleLogger = new ConsoleLogger(LogLevel.INFO); // INFO 이상만

  // 2. 체인 연결: Network -> File -> Console
  networkLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);

  return networkLogger;
}

const loggerChain = getChainOfLoggers();

console.log("--- Sending INFO message ---");
loggerChain.logMessage(LogLevel.INFO, "This is an information.");
// Console만 출력 (INFO는 1, Network(3)와 File(2)은 1을 처리하지 않음)

console.log("\n--- Sending DEBUG message ---");
loggerChain.logMessage(LogLevel.DEBUG, "This is a debug level information.");
// File, Console 출력

console.log("\n--- Sending WARN message ---");
loggerChain.logMessage(LogLevel.WARN, "This is a warning information.");
// Network, File, Console 모두 출력
