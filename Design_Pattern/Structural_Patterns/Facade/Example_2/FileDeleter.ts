import * as fs from "fs";

export class FileDeleter {
  public deleteFile(filePath: string): void {
    fs.unlinkSync(filePath);
  }
}
