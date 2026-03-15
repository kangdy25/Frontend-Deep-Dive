import { ProductFactory, ProductType } from "./ProductFactory";
import { Product } from "./Product";
import { Electronics, Clothing, Book } from "./Products";

export class ConcreteProductFactory extends ProductFactory {
  public createProduct(type: ProductType): Product {
    switch (type) {
      case "electronics":
        return new Electronics();
      case "clothing":
        return new Clothing();
      case "book":
        return new Book();
      default:
        // TypeScript의 유니온 타입 덕분에 여기까지 올 일이 거의 없지만,
        // 런타임 안전성을 위해 에러 처리를 남겨둡니다.
        throw new Error("Unknown product type.");
    }
  }
}
