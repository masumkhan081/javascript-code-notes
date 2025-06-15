// --- Memoization ---

// Example 1: Manual Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn.apply(this, args);
        }
        return cache[key];
    };
}

function slowSquare(n) {
    // Simulate slow computation
    for (let i = 0; i < 1e6; i++); 
    return n * n;
}
const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // 25 (slow first time)
console.log(fastSquare(5)); // 25 (fast from cache)

// --- Note ---
// Memoization stores the result of expensive function calls for given arguments.
// Useful for optimizing recursive/expensive computations.

// --- Interview Case ---
// What will this log?
let fibCalls = 0;
function fib(n) {
    fibCalls++;
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
const memoFib = memoize(fib);
console.log(memoFib(10)); // 55
console.log('fibCalls:', fibCalls); // Much less than 177 (naive calls)
