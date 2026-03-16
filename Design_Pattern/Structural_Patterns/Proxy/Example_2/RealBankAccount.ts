import { BankAccount } from "./BankAccount";

export class RealBankAccount implements BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. Current balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance.");
    }
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`${amount} deposited. Current balance: ${this.balance}`);
  }
}
