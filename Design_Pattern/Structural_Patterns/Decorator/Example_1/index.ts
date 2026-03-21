import { SimpleCoffee } from "./Coffee";
import { MilkDecorator, SugarDecorator } from "./CoffeeDecorator";

// 1. 기본 커피
const simpleCoffee = new SimpleCoffee();
console.log(`${simpleCoffee.getDescription()} $${simpleCoffee.getCost()}`);

// 2. 우유 커피 (SimpleCoffee를 MilkDecorator로 감쌈)
const milkCoffee = new MilkDecorator(new SimpleCoffee());
console.log(`${milkCoffee.getDescription()} $${milkCoffee.getCost()}`);

// 3. 우유 + 설탕 커피 (Milk로 감싼 SimpleCoffee를 다시 Sugar로 감쌈)
const milkAndSugarCoffee = new SugarDecorator(
  new MilkDecorator(new SimpleCoffee()),
);
console.log(
  `${milkAndSugarCoffee.getDescription()} $${milkAndSugarCoffee.getCost()}`,
);
