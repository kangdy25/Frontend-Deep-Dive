export interface FileSystemItem {
  getName(): string;
}

export class FileItem implements FileSystemItem {
  constructor(private name: string) {}
  getName(): string {
    return this.name;
  }
}

export class DirectoryItem implements FileSystemItem {
  private contents: FileSystemItem[] = [];
  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.contents.push(item);
  }

  getContents(): FileSystemItem[] {
    return this.contents;
  }

  getName(): string {
    return this.name;
  }
}
