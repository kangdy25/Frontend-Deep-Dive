import { Shape, Visitor } from "./Interfaces";

export class Circle implements Shape {
  constructor(public readonly radius: number) {}

  public accept(visitor: Visitor): void {
    // 더블 디스패치(Double Dispatch):
    // 본인(this)을 넘겨서 방문자가 본인의 타입을 알게 합니다.
    visitor.visitCircle(this);
  }
}

export class Rectangle implements Shape {
  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {}

  public accept(visitor: Visitor): void {
    visitor.visitRectangle(this);
  }
}
