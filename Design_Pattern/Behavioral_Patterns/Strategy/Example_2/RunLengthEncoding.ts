import { CompressionStrategy } from "./CompressionStrategy";

export class RunLengthEncoding implements CompressionStrategy {
  public compress(data: string): string {
    if (!data) return "";

    let compressed = "";
    let count = 1;

    for (let i = 1; i <= data.length; i++) {
      // 이전 문자와 같으면 카운트 증가, 다르면 결과에 추가
      if (i < data.length && data[i] === data[i - 1]) {
        count++;
      } else {
        compressed += data[i - 1] + count;
        count = 1;
      }
    }

    return compressed;
  }
}
