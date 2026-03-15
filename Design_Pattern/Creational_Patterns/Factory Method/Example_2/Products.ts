import { Product } from "./Product";

export class Electronics implements Product {
  create(): void {
    console.log("Electronics product created.");
  }
}

export class Clothing implements Product {
  create(): void {
    console.log("Clothing product created.");
  }
}

export class Book implements Product {
  create(): void {
    console.log("Book product created.");
  }
}
