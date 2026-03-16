import { BankAccountProxy } from "./BankAccountProxy";

console.log("--- Admin Account Session ---");
const adminAccount = new BankAccountProxy("Admin", 1000);
adminAccount.deposit(500); // 허용
adminAccount.withdraw(300); // 허용

console.log("\n--- Standard User Account Session ---");
const userAccount = new BankAccountProxy("User", 1000);
userAccount.deposit(500); // 허용
userAccount.withdraw(300); // 거절 (Access denied)
