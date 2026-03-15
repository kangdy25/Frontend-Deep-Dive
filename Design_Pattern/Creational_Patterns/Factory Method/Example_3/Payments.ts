import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
  constructor(private creditCardNumber: string) {}

  processPayment(amount: number): void {
    console.log(`Credit card: $${amount} (Card: ${this.creditCardNumber})`);
  }
}

export class PayPalPayment implements Payment {
  constructor(private payPalEmail: string) {}

  processPayment(amount: number): void {
    console.log(`PayPal: $${amount} (Email: ${this.payPalEmail})`);
  }
}

export class BankTransferPayment implements Payment {
  constructor(private bankAccountNumber: string) {}

  processPayment(amount: number): void {
    console.log(
      `Bank transfer: $${amount} (Account: ${this.bankAccountNumber})`,
    );
  }
}
