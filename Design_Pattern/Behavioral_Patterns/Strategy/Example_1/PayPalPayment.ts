import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public pay(amount: number): void {
    console.log(`${amount} paid using PayPal (Email: ${this.email})`);
  }
}
