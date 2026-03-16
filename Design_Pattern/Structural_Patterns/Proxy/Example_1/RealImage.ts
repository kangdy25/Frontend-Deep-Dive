import { Image } from "./Image";

export class RealImage implements Image {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading ${this.fileName}... (High cost operation)`);
  }

  public display(): void {
    console.log(`Displaying ${this.fileName}`);
  }

  public getFileName(): string {
    return this.fileName;
  }
}
