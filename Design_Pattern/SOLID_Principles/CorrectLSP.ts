export {};

// ✅ LSP를 적용한 코드

interface Flyable {
  fly(): void;
}

class Bird {
  public eat(): void {
    console.log("Bird is eating");
  }
}

class Sparrow extends Bird implements Flyable {
  public fly(): void {
    console.log("Sparrow is flying");
  }
}

class Penguin extends Bird {}

// --- 실행부 (Main) ---
const sparrow: Bird = new Sparrow();
sparrow.eat();

(sparrow as unknown as Flyable).fly();

const penguin: Bird = new Penguin();
penguin.eat();

(penguin as unknown as Flyable).fly(); // ⚠️ 런타임에서 에러가 발생합니다.
