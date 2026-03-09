import { CompressionStrategy } from "./CompressionStrategy";

export class Compressor {
  private strategy?: CompressionStrategy;

  public setCompressionStrategy(strategy: CompressionStrategy): void {
    this.strategy = strategy;
  }

  public compress(data: string): string {
    if (!this.strategy) {
      throw new Error("Compression strategy is not set!");
    }
    return this.strategy.compress(data);
  }
}
