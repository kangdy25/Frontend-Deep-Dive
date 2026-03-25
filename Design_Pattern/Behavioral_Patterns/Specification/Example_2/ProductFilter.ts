import { Product, Specification } from "./Models";

export class ProductFilter {
  public static filter(items: Product[], spec: Specification): Product[] {
    // 자바의 stream().filter() 대응
    return items.filter((item) => spec.isSatisfiedBy(item));
  }

  public static printProducts(products: Product[]): void {
    products.forEach((p) => {
      console.log(
        `${p.name} - ${p.category} - $${p.price} - Stock: ${p.stock}`,
      );
    });
  }
}
