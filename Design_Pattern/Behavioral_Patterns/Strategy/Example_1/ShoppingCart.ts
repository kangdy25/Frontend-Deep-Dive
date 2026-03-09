import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart {
  private paymentStrategy?: PaymentStrategy;

  // 동적으로 전략을 교체할 수 있게 해주는 핵심 메서드
  public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  public checkout(amount: number): void {
    if (!this.paymentStrategy) {
      console.error("Payment strategy is not set!");
      return;
    }
    this.paymentStrategy.pay(amount);
  }
}
