// --- Function Composition Examples ---

// Example 1: Manual Composition
function add2(x) {
    return x + 2;
}
function multiply3(x) {
    return x * 3;
}
function add2ThenMultiply3(x) {
    return multiply3(add2(x));
}
console.log(add2ThenMultiply3(4)); // (4+2)*3 = 18

// Example 2: Generic Compose Function
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
const add2ThenMultiply3_compose = compose(multiply3, add2);
console.log(add2ThenMultiply3_compose(4)); // 18

// Example 3: Compose Multiple Functions
function composeMany(...funcs) {
    return function(x) {
        return funcs.reduceRight((acc, fn) => fn(acc), x);
    };
}
const result = composeMany(Math.sqrt, multiply3, add2)(7); // sqrt((7+2)*3)
console.log(result); // sqrt(27) ≈ 5.196

// --- Example Case: Interview Style ---

// What will be the output?
function toUpper(str) {
    return str.toUpperCase();
}
function exclaim(str) {
    return str + '!';
}
const shout = compose(exclaim, toUpper);
console.log(shout('hello'));

// Explanation:
// 1. compose(exclaim, toUpper) creates a new function that uppercases and then adds '!'.
// 2. shout('hello') returns 'HELLO!'

// --- Additional Function Topics to Consider ---
// - Arrow functions and lexical this
// - Default parameters
// - Rest parameters
// - Function expressions vs declarations
// - IIFE (Immediately Invoked Function Expressions)
// - Recursion
// - Callback functions
// - Named vs anonymous functions
// - Parameter destructuring
// - Function binding (bind, call, apply)
// - Generators and iterators
// - Function scope and closures
// - Method vs function
// - Function overloading (JS doesn't support natively, but patterns exist)
// - Async functions
// - Function hoisting
// - Variadic functions
// - Memoization
