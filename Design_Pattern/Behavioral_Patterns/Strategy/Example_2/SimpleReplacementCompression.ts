import { CompressionStrategy } from "./CompressionStrategy";

export class SimpleReplacementCompression implements CompressionStrategy {
  public compress(data: string): string {
    return data
      .replace(/a/g, "1")
      .replace(/e/g, "2")
      .replace(/i/g, "3")
      .replace(/o/g, "4")
      .replace(/u/g, "5");
  }
}
