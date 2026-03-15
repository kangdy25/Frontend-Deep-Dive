import { ConcreteProductFactory } from "./ConcreteProductFactory";

const factory = new ConcreteProductFactory();

factory.orderProduct("electronics");
factory.orderProduct("clothing");
factory.orderProduct("book");
