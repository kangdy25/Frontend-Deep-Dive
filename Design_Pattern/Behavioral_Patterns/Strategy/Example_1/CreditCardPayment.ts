import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  private name: string;
  private cardNumber: string;

  constructor(name: string, cardNumber: string) {
    this.name = name;
    this.cardNumber = cardNumber;
  }

  public pay(amount: number): void {
    console.log(`${amount} paid with credit card (Holder: ${this.name})`);
  }
}
