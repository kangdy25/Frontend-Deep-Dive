// ⛔️ LSP를 위반한 코드

class Bird {
  fly(): void {
    console.log("Bird is flying");
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins cannot fly");
  }
}

const bird: Bird = new Bird();
bird.fly();

const penguin: Bird = new Penguin();
penguin.fly();
