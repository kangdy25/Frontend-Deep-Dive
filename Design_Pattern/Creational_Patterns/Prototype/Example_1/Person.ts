import { Prototype } from "./Prototype";

export class Person implements Prototype {
  constructor(
    private name: string,
    private age: number,
    private address: string,
  ) {}

  // 복제 메서드: 새 인스턴스를 만들고 현재 값을 전달합니다.
  public clone(): Person {
    // 자바의 복사 생성자 대신, 여기서는 필드 값을 직접 넘겨 새 객체를 만듭니다.
    return new Person(this.name, this.age, this.address);
  }

  public setAddress(newAddress: string): void {
    this.address = newAddress;
  }

  public displayInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`,
    );
  }
}
