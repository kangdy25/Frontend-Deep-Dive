import { Handler } from "./Handler";

// 양수인지 확인
export class PositiveHandler extends Handler {
  protected process(number: number): void {
    if (number > 0) {
      console.log(`${number} is a positive number`);
    }
  }
}

// 짝수인지 확인
export class EvenHandler extends Handler {
  protected process(number: number): void {
    if (number % 2 === 0) {
      console.log(`${number} is an even number`);
    }
  }
}

// 3의 배수인지 확인
export class DivisibleBy3Handler extends Handler {
  protected process(number: number): void {
    if (number % 3 === 0) {
      console.log(`${number} is divisible by 3`);
    }
  }
}
