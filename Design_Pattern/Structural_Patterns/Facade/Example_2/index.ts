import { FileSystemFacade } from "./FileSystemFacade";

const fsFacade = new FileSystemFacade();
const testFile = "test.txt";

// 1. 파일 쓰기
const writeSuccess = fsFacade.writeFile(testFile, "Hello, TypeScript Facade!");
console.log(`File write success: ${writeSuccess}`);

// 2. 파일 읽기
const content = fsFacade.readFile(testFile);
console.log(`File content: ${content}`);

// 3. 파일 삭제
const deleteSuccess = fsFacade.deleteFile(testFile);
console.log(`File delete success: ${deleteSuccess}`);
