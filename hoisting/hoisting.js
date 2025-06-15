// --- Hoisting Example ---

// Example 1: Variable Hoisting with var
console.log(a); // undefined (declaration is hoisted, assignment is not)
var a = 10;

// Example 2: Function Hoisting
foo(); // 'Hello from foo!'
function foo() {
    console.log('Hello from foo!');
}

// Example 3: let/const are NOT hoisted the same way
try {
    console.log(b); // ReferenceError
    let b = 20;
} catch (e) {
    console.log('Error:', e.message);
}

// Example 4: Hoisting in Function Expressions
try {
    bar(); // TypeError: bar is not a function
    var bar = function() {
        console.log('Hello from bar!');
    };
} catch (e) {
    console.log('Error:', e.message);
}

// --- Example Case: Interview Style ---

// What will be the output?
console.log(x);
var x = 5;
function x() {}
console.log(typeof x);

// Explanation:
// 1. Function declarations are hoisted before variable declarations.
// 2. So, x is first assigned to the function x(){}.
// 3. Then, 'var x' does nothing (already declared), but 'x = 5' assigns 5 to x.
// 4. So, first console.log(x) prints the function definition (in non-strict mode, older JS engines),
//    but in most modern engines, it prints 'undefined' because var x declaration shadows the function.
// 5. typeof x after assignment is 'number'.
