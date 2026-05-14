function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n <= 1) return n;

  if (n in memo) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

console.log("피보나치 수열: ", fibonacci(10)); // 55
