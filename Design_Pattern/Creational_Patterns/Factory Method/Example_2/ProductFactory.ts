import { Product } from "./Product";

// 타입 안전성을 위해 문자열 타입을 정의합니다.
export type ProductType = "electronics" | "clothing" | "book";

export abstract class ProductFactory {
  // Factory Method
  public abstract createProduct(type: ProductType): Product;

  public orderProduct(type: ProductType): Product {
    const product = this.createProduct(type);
    product.create();
    return product;
  }
}
