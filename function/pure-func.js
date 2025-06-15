// --- Pure Function Examples ---

// Example 1: Pure Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Example 2: Impure Function (for contrast)
let count = 0;
function impureAdd(a) {
    count += a;
    return count;
}
console.log(impureAdd(2)); // 2
console.log(impureAdd(3)); // 5

// Example 3: Pure Function with Arrays
function doubleArray(arr) {
    return arr.map(x => x * 2);
}
const nums = [1, 2, 3];
console.log(doubleArray(nums)); // [2, 4, 6]
console.log(nums); // [1, 2, 3] (unchanged)

// --- Example Case: Interview Style ---

// Is this function pure?
function multiplyAndLog(a, b) {
    console.log(a * b);
    return a * b;
}
// Answer: No, because it has a side effect (console.log)

// Explanation:
// 1. A pure function's output depends only on its inputs and has no side effects.
// 2. Pure functions are predictable, testable, and easier to reason about.
