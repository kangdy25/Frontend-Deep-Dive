// account.js
export function isBalanceValid(balance: any) {
  return typeof balance === "number" && balance >= 0;
}
