// Component 인터페이스
export interface Coffee {
  getDescription(): string;
  getCost(): number;
}

// ConcreteComponent 클래스 (기본 객체)
export class SimpleCoffee implements Coffee {
  public getDescription(): string {
    return "Simple coffee";
  }

  public getCost(): number {
    return 5.0;
  }
}
