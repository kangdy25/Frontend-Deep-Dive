import {
  EvenSpecification,
  RangeSpecification,
} from "./ConcreteSpecifications";

const evenSpec = new EvenSpecification();
const rangeSpec = new RangeSpecification(10, 20);

// 두 스펙을 조립하여 새로운 조건을 만듭니다.
const evenAndInRangeSpec = evenSpec.and(rangeSpec);

const testNumber = 24;

console.log(`Even: ${evenSpec.isSatisfiedBy(testNumber)}`);
// true
console.log(`In range 10-20: ${rangeSpec.isSatisfiedBy(testNumber)}`);
// false (24 > 20)
console.log(
  `Even and in range 10-20: ${evenAndInRangeSpec.isSatisfiedBy(testNumber)}`,
);
// false (둘 다 만족해야 함)
