import { Product, Specification } from "./Models";

// 카테고리 일치 여부
export class CategorySpec implements Specification {
  constructor(private category: string) {}
  isSatisfiedBy(item: Product): boolean {
    return item.category === this.category;
  }
}

// 가격 조건 (최대 가격 이하)
export class PriceSpec implements Specification {
  constructor(private maxPrice: number) {}
  isSatisfiedBy(item: Product): boolean {
    return item.price <= this.maxPrice;
  }
}

// 재고 여부
export class InStockSpec implements Specification {
  isSatisfiedBy(item: Product): boolean {
    return item.stock > 0;
  }
}
