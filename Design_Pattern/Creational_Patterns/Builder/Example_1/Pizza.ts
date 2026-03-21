import { PizzaBuilder } from "./PizzaBuilder";

export class Pizza {
  private dough: string;
  private sauce: string;
  private topping: string;

  // 빌더로부터 데이터를 전달받아 객체를 완성합니다.
  constructor(builder: PizzaBuilder) {
    this.dough = builder.getDough();
    this.sauce = builder.getSauce();
    this.topping = builder.getTopping();
  }

  public toString(): string {
    return `Pizza with ${this.dough} dough, ${this.sauce} sauce, and ${this.topping} topping.`;
  }
}
