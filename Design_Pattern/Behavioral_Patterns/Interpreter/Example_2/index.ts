import { Context } from "./Context";
import { SQLParser } from "./SQLParser";

const context = new Context();

// 테스트 쿼리 1: 모든 유저 선택
const query1 = "SELECT * FROM users";
const expr1 = SQLParser.parse(query1);
console.log(`Result of query: ${query1}`);
console.table(expr1.interpret(context));

// 테스트 쿼리 2: 27세보다 많은 유저의 이름과 나이 선택
const query2 = "SELECT name,age FROM users WHERE age > 27";
const expr2 = SQLParser.parse(query2);
console.log(`\nResult of query: ${query2}`);
console.table(expr2.interpret(context));
