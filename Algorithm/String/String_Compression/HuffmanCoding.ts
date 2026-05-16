// 1. 트리를 구성할 노드 클래스 정의
class HuffmanNode {
  char: string | null; // 잎(Leaf) 노드만 글자를 가짐, 부모 노드는 null
  freq: number; // 빈도수
  left: HuffmanNode | null;
  right: HuffmanNode | null;

  constructor(char: string | null, freq: number, left: HuffmanNode | null = null, right: HuffmanNode | null = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

/**
 * 텍스트를 분석하여 허프만 트리를 구축합니다.
 */
function buildHuffmanTree(text: string): HuffmanNode | null {
  if (text.length === 0) return null;

  // 1단계: 글자별 빈도수 계산
  const freqMap: Record<string, number> = {};
  for (const char of text) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // 2단계: 빈도수를 바탕으로 초기 잎(Leaf) 노드 배열 생성
  const nodes: HuffmanNode[] = Object.keys(freqMap).map((char) => new HuffmanNode(char, freqMap[char]));

  // 3단계: 노드가 1개(루트) 남을 때까지 가장 작은 2개를 묶어서 트리 완성
  while (nodes.length > 1) {
    // 빈도수 오름차순 정렬 (실무에서는 Min-Heap 사용 권장)
    nodes.sort((a, b) => a.freq - b.freq);

    // 가장 빈도수가 작은 두 노드를 빼냄
    const leftNode = nodes.shift()!;
    const rightNode = nodes.shift()!;

    // 두 노드의 빈도를 합친 새로운 부모 노드 생성 (문자는 null)
    const parentNode = new HuffmanNode(null, leftNode.freq + rightNode.freq, leftNode, rightNode);

    // 부모 노드를 다시 배열에 넣음
    nodes.push(parentNode);
  }

  return nodes[0]; // 완성된 트리의 루트 노드 반환
}

/**
 * 허프만 트리를 순회하며 각 글자별 2진수 코드를 생성합니다.
 */
function generateCodes(node: HuffmanNode | null, currentCode: string, codeMap: Record<string, string>) {
  if (!node) return;

  // 잎 노드(글자가 있는 노드)에 도달하면 코드맵에 저장
  if (node.char !== null) {
    codeMap[node.char] = currentCode;
    return;
  }

  // 왼쪽은 '0', 오른쪽은 '1'을 붙여서 재귀 탐색
  generateCodes(node.left, currentCode + "0", codeMap);
  generateCodes(node.right, currentCode + "1", codeMap);
}

/**
 * [실행 함수] 문자열을 허프만 알고리즘으로 압축합니다.
 */
function huffmanCompress(text: string) {
  const rootNode = buildHuffmanTree(text);
  if (!rootNode) return { encodedText: "", codeMap: {} };

  const codeMap: Record<string, string> = {};

  // 글자가 1종류뿐인 예외 처리 (예: "AAAAA")
  if (rootNode.left === null && rootNode.right === null && rootNode.char) {
    codeMap[rootNode.char] = "0";
  } else {
    generateCodes(rootNode, "", codeMap);
  }

  // 원본 텍스트를 코드맵을 이용해 2진수 문자열로 변환
  let encodedText = "";
  for (const char of text) {
    encodedText += codeMap[char];
  }

  return { encodedText, codeMap, rootNode };
}

const originalText = "BEEP BOOP BEER!";
const result = huffmanCompress(originalText);

console.log(`원본: ${originalText} (길이: ${originalText.length * 8} bits)`);
console.log("생성된 허프만 코드 표:", result.codeMap);
console.log(`압축: ${result.encodedText} (길이: ${result.encodedText.length} bits)`);
