import { FontFactory } from "./FontFactory";

// 1. 새로운 폰트 객체 생성
const Arial12Red = FontFactory.getFont("Arial", 12, "Red");
Arial12Red.apply("Hello World");

// 2. 동일한 속성의 폰트 요청 (재사용)
const Arial12RedDuplicate = FontFactory.getFont("Arial", 12, "Red");
Arial12RedDuplicate.apply("Design Patterns are cool!");

// 3. 다른 속성의 폰트 생성
const Serif14Blue = FontFactory.getFont("Serif", 14, "Blue");
Serif14Blue.apply("Flyweight Pattern in TypeScript");

console.log("\n--- Identity Check ---");
console.log(`Is same instance? ${Arial12Red === Arial12RedDuplicate}`); // true
