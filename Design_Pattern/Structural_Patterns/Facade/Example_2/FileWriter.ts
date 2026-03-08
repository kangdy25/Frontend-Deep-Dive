import * as fs from "fs";

export class FileWriter {
  public writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content, "utf-8");
  }
}
