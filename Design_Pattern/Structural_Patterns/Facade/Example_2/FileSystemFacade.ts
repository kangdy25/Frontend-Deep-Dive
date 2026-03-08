import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";
import { FileDeleter } from "./FileDeleter";

export class FileSystemFacade {
  private fileReader: FileReader;
  private fileWriter: FileWriter;
  private fileDeleter: FileDeleter;

  constructor() {
    this.fileReader = new FileReader();
    this.fileWriter = new FileWriter();
    this.fileDeleter = new FileDeleter();
  }

  public readFile(filePath: string): string | null {
    try {
      return this.fileReader.readFile(filePath);
    } catch (error) {
      console.error(`Error reading file: ${error}`);
      return null;
    }
  }

  public writeFile(filePath: string, content: string): boolean {
    try {
      this.fileWriter.writeFile(filePath, content);
      return true;
    } catch (error) {
      console.error(`Error writing file: ${error}`);
      return false;
    }
  }

  public deleteFile(filePath: string): boolean {
    try {
      this.fileDeleter.deleteFile(filePath);
      return true;
    } catch (error) {
      console.error(`Error deleting file: ${error}`);
      return false;
    }
  }
}
