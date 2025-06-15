// --- Higher-Order Function Examples ---

// Example 1: Basic Higher-Order Function
function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
}
function upperCaseName(name) {
    return name.toUpperCase();
}
console.log(greet('Alice', upperCaseName)); // Hello, ALICE

// Example 2: Array Methods (map, filter, reduce)
const nums = [1, 2, 3, 4];
const squares = nums.map(x => x * x); // map is a higher-order function
console.log(squares); // [1, 4, 9, 16]

// Example 3: Function Returning Function
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// --- Example Case: Interview Style ---

// What will be the output?
function makeLogger(prefix) {
    return function(msg) {
        console.log(prefix + ': ' + msg);
    };
}
const infoLogger = makeLogger('INFO');
infoLogger('Server started');

// Explanation:
// 1. makeLogger is a higher-order function: it returns a function.
// 2. infoLogger is a specialized logger with a preset prefix.
// 3. This pattern is common in logging, event handling, and middleware.
