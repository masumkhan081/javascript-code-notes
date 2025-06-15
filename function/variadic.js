// --- Variadic Functions ---

// A variadic function accepts any number of arguments.
function sumAll() {
    return Array.from(arguments).reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(4, 5, 6, 7)); // 22

// Using rest parameters (modern JS)
function multiplyAll(...nums) {
    return nums.reduce((acc, n) => acc * n, 1);
}
console.log(multiplyAll(2, 3, 4)); // 24

// --- Note ---
// Variadic functions are useful for aggregation, math, and flexible APIs.
// Rest parameters are preferred over 'arguments' for clarity and safety.

// --- Interview Case ---
// What will this log?
function join(separator, ...items) {
    return items.join(separator);
}
console.log(join('-', 'a', 'b', 'c')); // 'a-b-c'
