import { Image } from "./Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public display(): void {
    // Lazy Loading: 실제로 필요할 때만 RealImage를 생성합니다.
    if (this.realImage === null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }

  public getFileName(): string {
    return this.fileName;
  }

  public getFileExtension(): string {
    const lastIndex = this.fileName.lastIndexOf(".");
    if (lastIndex === -1) {
      return "";
    }
    return this.fileName.substring(lastIndex + 1);
  }
}
