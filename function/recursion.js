// --- Recursion ---

// Example 1: Factorial (classic recursion)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Example 2: Fibonacci (recursive)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

// --- Note ---
// Recursion is when a function calls itself to solve a smaller version of the problem.
// Always define a base case to avoid infinite recursion.

// --- Interview Case ---
// What will this log?
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}
console.log(sumTo(4)); // 10

// Explanation:
// sumTo(4) = 4 + 3 + 2 + 1 = 10
