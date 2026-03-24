import {
  PositiveHandler,
  EvenHandler,
  DivisibleBy3Handler,
} from "./ConcreteHandlers";

// 1. 처리기(Handler)들 생성
const positive = new PositiveHandler();
const even = new EvenHandler();
const divisibleBy3 = new DivisibleBy3Handler();

// 2. 체인 연결 (positive -> even -> divisibleBy3)
positive.setNext(even);
even.setNext(divisibleBy3);

// 3. 요청 처리 시작
console.log("--- Input: -2 ---");
positive.handle(-2); // 짝수 조건만 만족하므로 "Even"만 출력

console.log("\n--- Input: 4 ---");
positive.handle(4); // 양수, 짝수 만족

console.log("\n--- Input: 6 ---");
positive.handle(6); // 양수, 짝수, 3의 배수 모두 만족
