export abstract class Specification {
  // 각 스펙이 구현해야 할 핵심 로직
  abstract isSatisfiedBy(number: number): boolean;

  // 두 스펙을 결합하는 메서드 (Composite 개념)
  public and(other: Specification): Specification {
    return new AndSpecification(this, other);
  }
}

// 내부적으로 두 스펙을 결합해주는 클래스
class AndSpecification extends Specification {
  constructor(
    private left: Specification,
    private right: Specification,
  ) {
    super();
  }

  public isSatisfiedBy(number: number): boolean {
    return this.left.isSatisfiedBy(number) && this.right.isSatisfiedBy(number);
  }
}
