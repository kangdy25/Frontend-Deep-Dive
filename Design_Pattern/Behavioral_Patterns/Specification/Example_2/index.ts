import { Product } from "./Models";
import { CategorySpec, PriceSpec, InStockSpec } from "./Specifications";
import { AndSpec, OrSpec, NotSpec } from "./CompositeSpecifications";
import { ProductFilter } from "./ProductFilter";

const products = [
  new Product("Laptop", "Electronics", 1200, 5),
  new Product("Smartphone", "Electronics", 800, 0),
  new Product("Headphones", "Electronics", 200, 10),
  new Product("Book", "Literature", 20, 50),
];

// 기본 스펙 생성
const electronicsSpec = new CategorySpec("Electronics");
const inStockSpec = new InStockSpec();
const expensiveSpec = new PriceSpec(500);

// 스펙 조합
const electronicInStock = new AndSpec(electronicsSpec, inStockSpec);
const electronicOrInStock = new OrSpec(electronicsSpec, inStockSpec);
const notExpensive = new NotSpec(expensiveSpec);

console.log("--- Electronics in stock ---");
ProductFilter.printProducts(ProductFilter.filter(products, electronicInStock));

console.log("\n--- Electronics or items in stock ---");
ProductFilter.printProducts(
  ProductFilter.filter(products, electronicOrInStock),
);

console.log("\n--- Not expensive items ---");
ProductFilter.printProducts(ProductFilter.filter(products, notExpensive));
