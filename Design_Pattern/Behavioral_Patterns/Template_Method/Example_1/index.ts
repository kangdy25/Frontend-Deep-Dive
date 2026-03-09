import { Tea } from "./Tea";
import { Coffee } from "./Coffee";

const tea = new Tea();
const coffee = new Coffee();

console.log("Making tea...");
tea.prepareRecipe();

console.log("\nMaking coffee...");
coffee.prepareRecipe();
