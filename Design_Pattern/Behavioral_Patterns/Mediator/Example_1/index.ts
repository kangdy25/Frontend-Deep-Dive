import { ChatMediatorImpl } from "./ChatMediator";
import { UserImpl } from "./User";

const mediator = new ChatMediatorImpl();

const john = new UserImpl(mediator, "John");
const jane = new UserImpl(mediator, "Jane");
const bob = new UserImpl(mediator, "Bob");
const alice = new UserImpl(mediator, "Alice");

mediator.addUser(john);
mediator.addUser(jane);
mediator.addUser(bob);
mediator.addUser(alice);

// John이 메시지를 보내면 중재자가 나머지 3명에게 뿌려줍니다.
john.send("Hi All");
