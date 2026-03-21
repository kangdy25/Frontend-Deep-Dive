import { Pizza } from "./Pizza";

export class PizzaBuilder {
  private dough: string = "Regular"; // 기본값 설정 가능
  private sauce: string = "None";
  private topping: string = "None";

  public setDough(dough: string): this {
    this.dough = dough;
    return this;
  }

  public setSauce(sauce: string): this {
    this.sauce = sauce;
    return this;
  }

  public setTopping(topping: string): this {
    this.topping = topping;
    return this;
  }

  // 빌더 내부의 데이터를 꺼내기 위한 Getter들 (Pizza 클래스에서 사용)
  public getDough(): string {
    return this.dough;
  }
  public getSauce(): string {
    return this.sauce;
  }
  public getTopping(): string {
    return this.topping;
  }

  // 최종적으로 Pizza 객체를 생성하여 반환합니다.
  public build(): Pizza {
    return new Pizza(this);
  }
}
