import { BankAccount } from "./BankAccount";
import { RealBankAccount } from "./RealBankAccount";

export class BankAccountProxy implements BankAccount {
  private realBankAccount: RealBankAccount;
  private userRole: string;

  constructor(userRole: string, initialBalance: number) {
    this.userRole = userRole;
    this.realBankAccount = new RealBankAccount(initialBalance);
  }

  // 권한 체크 로직 (내부에서만 사용)
  private hasAccess(): boolean {
    return this.userRole.toLowerCase() === "admin";
  }

  public withdraw(amount: number): void {
    if (this.hasAccess()) {
      // 권한이 있으면 실제 계좌 객체에 위임
      this.realBankAccount.withdraw(amount);
    } else {
      // 권한이 없으면 요청 차단
      console.log(
        `Access denied for role [${this.userRole}]. Only Admin can withdraw.`,
      );
    }
  }

  public deposit(amount: number): void {
    // 입금은 누구나 가능하므로 바로 위임
    this.realBankAccount.deposit(amount);
  }
}
