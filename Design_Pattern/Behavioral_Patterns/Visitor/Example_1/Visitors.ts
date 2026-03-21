import { Visitor } from "./Interfaces";
import { Circle, Rectangle } from "./Shapes";

// 넓이 계산 방문자
export class AreaVisitor implements Visitor {
  public visitCircle(circle: Circle): void {
    const area = Math.PI * Math.pow(circle.radius, 2);
    console.log(`Circle Area: ${area.toFixed(2)}`);
  }

  public visitRectangle(rectangle: Rectangle): void {
    const area = rectangle.width * rectangle.height;
    console.log(`Rectangle Area: ${area}`);
  }
}

// 둘레 계산 방문자
export class PerimeterVisitor implements Visitor {
  public visitCircle(circle: Circle): void {
    const perimeter = 2 * Math.PI * circle.radius;
    console.log(`Circle Perimeter: ${perimeter.toFixed(2)}`);
  }

  public visitRectangle(rectangle: Rectangle): void {
    const perimeter = 2 * (rectangle.width + rectangle.height);
    console.log(`Rectangle Perimeter: ${perimeter}`);
  }
}
