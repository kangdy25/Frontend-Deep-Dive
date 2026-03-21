import { PizzaBuilder } from "./PizzaBuilder";

// 1. 메서드 체이닝을 이용한 깔끔한 생성
const myPizza = new PizzaBuilder()
  .setDough("Thin Crust")
  .setSauce("Tomato")
  .setTopping("Cheese")
  .build();

console.log(myPizza.toString());

console.log("---");

// 2. 조건에 따른 단계별 생성
const orderType = "Veggie";
const pizzaBuilder = new PizzaBuilder().setDough("Regular");

pizzaBuilder.setSauce("Pesto");

if (orderType === "Veggie") {
  pizzaBuilder.setTopping("Vegetables");
} else {
  pizzaBuilder.setTopping("Pepperoni");
}

const customPizza = pizzaBuilder.build();
console.log(customPizza.toString());
