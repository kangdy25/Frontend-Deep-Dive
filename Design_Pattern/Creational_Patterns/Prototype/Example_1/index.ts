import { Person } from "./Person";

const original = new Person("John", 30, "123 Main St");
original.displayInfo();

// 원본을 복제하여 새로운 객체 생성
const cloned = original.clone();
cloned.setAddress("456 Clone St");

console.log("\n--- After cloning and modifying the clone ---");
original.displayInfo(); // 원본은 그대로 "123 Main St"
cloned.displayInfo(); // 복제본만 "456 Clone St"
