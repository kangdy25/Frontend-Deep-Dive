import * as fs from "fs";

export class FileReader {
  public readFile(filePath: string): string {
    return fs.readFileSync(filePath, "utf-8");
  }
}
