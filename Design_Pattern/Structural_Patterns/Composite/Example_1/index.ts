import { File } from "./File";
import { Directory } from "./Directory";

const file1 = new File("Document.txt", 100);
const file2 = new File("Image.jpg", 200);

const subDir = new Directory("SubFolder");
subDir.add(new File("SubFile.txt", 50));

const rootDir = new Directory("RootFolder");
rootDir.add(file1);
rootDir.add(file2);
rootDir.add(subDir);

console.log("--- Initial structure ---");
rootDir.printName();
console.log(`Total size: ${rootDir.getSize()} KB`);

console.log("\n--- Removing Image.jpg ---");
rootDir.removeByName("Image.jpg");
rootDir.printName();
console.log(`Total size: ${rootDir.getSize()} KB`);

console.log("\n--- Removing SubFolder ---");
rootDir.remove(subDir);
rootDir.printName();
console.log(`Total size: ${rootDir.getSize()} KB`);
