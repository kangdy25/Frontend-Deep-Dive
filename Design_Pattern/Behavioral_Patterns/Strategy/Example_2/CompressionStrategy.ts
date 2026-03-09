export interface CompressionStrategy {
  compress(data: string): string;
}
