import { Game } from "./Game";
import { GameCaretaker } from "./GameCaretaker";

const game = new Game();
const caretaker = new GameCaretaker();

// 1. 게임 진행 및 세이브 1
game.set("Level 1", 100);
caretaker.add(game.save());

// 2. 게임 진행 및 세이브 2
game.set("Level 2", 200);
caretaker.add(game.save());

// 3. 게임 진행 (세이브 안 함)
game.set("Level 3", 300);

// 4. 세이브 포인트로 복구
const memento2 = caretaker.get(1);
if (memento2) game.restore(memento2); // Level 2로 복구

const memento1 = caretaker.get(0);
if (memento1) game.restore(memento1); // Level 1로 복구
