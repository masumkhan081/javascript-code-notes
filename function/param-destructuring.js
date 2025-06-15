// --- Parameter Destructuring ---

// Example 1: Object Destructuring in Parameters
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: 'Alice', age: 30 });

// Example 2: Array Destructuring in Parameters
function sum([a, b]) {
    return a + b;
}
console.log(sum([2, 3])); // 5

// --- Note ---
// Destructuring in function parameters allows for concise extraction of values.
// Useful for working with objects/arrays in APIs, React props, etc.

// --- Interview Case ---
// What will this log?
function showCoords({ x = 0, y = 0 }) {
    console.log(`X: ${x}, Y: ${y}`);
}
showCoords({ y: 5 }); // X: 0, Y: 5
