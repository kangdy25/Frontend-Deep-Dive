import { getNumberWithHyphen } from "./parsers";

// Parser를 export 하지 않습니다.
type Parser = (value: string) => string;

/**
 * 의존성을 역전시키기 위해 parser의 인터페이스를 활용 합니다.
 * @param {string} value
 * @param {(value: string): string} parser
 * @returns {string}
 */
function parsePhoneNumber(value: string, parser: Parser) {
  return parser(value);
}

let $inputPhoneNumber;
$inputPhoneNumber!.addEventListener("change", (event: KeyboardEvent) => {
  const $target = event.target as HTMLInputElement;
  const phoneNumber = $target.value;

  $target.value = parsePhoneNumber(phoneNumber, getNumberWithHyphen);
});
