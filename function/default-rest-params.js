// --- Default and Rest Parameters ---

// Default Parameters
function greet(name = 'Guest') {
    return 'Hello, ' + name + '!';
}
console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// --- Note ---
// Default parameters allow functions to have optional arguments with fallback values.
// Rest parameters allow functions to accept any number of arguments as an array.

// --- Interview Case ---
// What will this log?
function logAll(first, ...rest) {
    console.log(first, rest);
}
logAll(1, 2, 3, 4); // 1 [2, 3, 4]

// Explanation:
// 1. 'first' gets the first argument (1),
// 2. 'rest' is an array of the remaining arguments ([2, 3, 4]).
