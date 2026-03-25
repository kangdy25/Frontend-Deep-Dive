import { Specification } from "./Specification";

// 짝수인지 확인하는 스펙
export class EvenSpecification extends Specification {
  public isSatisfiedBy(number: number): boolean {
    return number % 2 === 0;
  }
}

// 범위 안에 있는지 확인하는 스펙
export class RangeSpecification extends Specification {
  constructor(
    private min: number,
    private max: number,
  ) {
    super();
  }

  public isSatisfiedBy(number: number): boolean {
    return number >= this.min && number <= this.max;
  }
}
