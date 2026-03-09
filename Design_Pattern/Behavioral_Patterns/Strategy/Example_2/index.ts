import { Compressor } from "./Compressor";
import { RunLengthEncoding } from "./RunLengthEncoding";
import { SimpleReplacementCompression } from "./SimpleReplacementCompression";

const compressor = new Compressor();
const data = "aabcccccaaa";

// 1. RLE 방식으로 압축
compressor.setCompressionStrategy(new RunLengthEncoding());
console.log(`RLE Compression: ${compressor.compress(data)}`);
// 출력: a2b1c5a3

// 2. 단순 치환 방식으로 압축 전략 변경
compressor.setCompressionStrategy(new SimpleReplacementCompression());
console.log(`Simple Replacement: ${compressor.compress(data)}`);
// 출력: 11bccccc111
