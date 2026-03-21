import type { File, Directory } from "./FileSystem";

export interface Visitor {
  visitFile(file: File): void;
  visitDirectory(directory: Directory): void;
}

export interface FileSystemElement {
  accept(visitor: Visitor): void;
}
