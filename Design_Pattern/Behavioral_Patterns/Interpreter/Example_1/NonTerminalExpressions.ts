import { Expression } from "./Expression";

// 덧셈 연산
export class Add implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  public interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

// 뺄셈 연산
export class Subtract implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  public interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}
