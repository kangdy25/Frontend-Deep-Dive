import { Coffee } from "./Coffee";

// 추상 Decorator 클래스
export abstract class CoffeeDecorator implements Coffee {
  // 감싸고 있는 원본 객체를 보관합니다.
  constructor(protected decoratedCoffee: Coffee) {}

  public getDescription(): string {
    return this.decoratedCoffee.getDescription();
  }

  public getCost(): number {
    return this.decoratedCoffee.getCost();
  }
}

// 구체적인 Decorator: 우유 추가
export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public getDescription(): string {
    return `${super.getDescription()}, Milk`;
  }

  public getCost(): number {
    return super.getCost() + 1.5;
  }
}

// 구체적인 Decorator: 설탕 추가
export class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public getDescription(): string {
    return `${super.getDescription()}, Sugar`;
  }

  public getCost(): number {
    return super.getCost() + 0.5;
  }
}
