import { Expression } from "./Expression";

export class NumberExpression implements Expression {
  constructor(private value: number) {}

  public interpret(): number {
    return this.value;
  }
}
