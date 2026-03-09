export abstract class Beverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew(); // 자식이 구현할 부분
    this.pourInCup();
    this.addCondiments(); // 자식이 구현할 부분
  }

  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }

  // 구체적인 단계는 추상 메서드로 선언하여 자식에게 위임합니다.
  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}
