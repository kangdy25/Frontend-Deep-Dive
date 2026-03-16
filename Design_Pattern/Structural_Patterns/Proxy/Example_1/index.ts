import { ProxyImage } from "./ProxyImage";

const image = new ProxyImage("test_image.jpg");

// 아직 RealImage는 생성되지 않았습니다! (부하 없음)
console.log(`File name: ${image.getFileName()}`);
console.log(`File extension: ${image.getFileExtension()}`);

console.log("\n--- First Display Call ---");
image.display(); // 이때 비로소 로딩과 출력이 일어납니다.

console.log("\n--- Second Display Call ---");
image.display(); // 이미 생성된 RealImage를 사용하므로 로딩 없이 출력만 합니다.
