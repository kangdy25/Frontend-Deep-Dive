export interface BankAccount {
  withdraw(amount: number): void;
  deposit(amount: number): void;
}
