export class Product {
  constructor(
    public readonly name: string,
    public readonly category: string,
    public readonly price: number,
    public readonly stock: number,
  ) {}
}

export interface Specification {
  isSatisfiedBy(item: Product): boolean;
}
