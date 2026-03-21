import { Circle, Rectangle } from "./Shapes";
import { AreaVisitor, PerimeterVisitor } from "./Visitors";

const shapes = [new Circle(5), new Rectangle(4, 6)];

const areaVisitor = new AreaVisitor();
const perimeterVisitor = new PerimeterVisitor();

console.log("--- Calculating Area ---");
shapes.forEach((shape) => shape.accept(areaVisitor));

console.log("\n--- Calculating Perimeter ---");
shapes.forEach((shape) => shape.accept(perimeterVisitor));
