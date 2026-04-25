import { Product, Specification } from "./Models";

export class AndSpec implements Specification {
  constructor(
    private spec1: Specification,
    private spec2: Specification,
  ) {}
  isSatisfiedBy(item: Product): boolean {
    return this.spec1.isSatisfiedBy(item) && this.spec2.isSatisfiedBy(item);
  }
}

export class OrSpec implements Specification {
  constructor(
    private spec1: Specification,
    private spec2: Specification,
  ) {}
  isSatisfiedBy(item: Product): boolean {
    return this.spec1.isSatisfiedBy(item) || this.spec2.isSatisfiedBy(item);
  }
}

export class NotSpec implements Specification {
  constructor(private spec: Specification) {}
  isSatisfiedBy(item: Product): boolean {
    return !this.spec.isSatisfiedBy(item);
  }
}
