import { NumberExpression } from "./Number";
import { Add, Subtract } from "./NonTerminalExpressions";

// (5 + 2) - 3 구성하기
const five = new NumberExpression(5);
const two = new NumberExpression(2);
const three = new NumberExpression(3);

// 내부 괄호부터 객체로 조립합니다.
const addExpression = new Add(five, two); // 5 + 2

// 최종 식 조립
const subtractExpression = new Subtract(addExpression, three); // (5 + 2) - 3

console.log(`(5 + 2) - 3 = ${subtractExpression.interpret()}`); // 출력: 4
