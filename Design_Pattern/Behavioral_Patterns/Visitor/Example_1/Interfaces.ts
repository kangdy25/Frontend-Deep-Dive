import { Circle, Rectangle } from "./Shapes";

// Visitor 인터페이스: 각 구체적인 요소(Element)를 방문하는 메서드 정의
export interface Visitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}

// Element 인터페이스: 방문자를 받아들이는 accept 메서드 정의
export interface Shape {
  accept(visitor: Visitor): void;
}
