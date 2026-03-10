import { Door } from "./Door";

const door = new Door();

door.open(); // "Door is now Open."
door.open(); // "Door is already Open."
door.close(); // "Door is now Closed."
door.close(); // "Door is already Closed."
