// 1-closure-basics.js
// JavaScript Closures: Fundamentals and Basic Patterns
// Closures are functions that remember the environment in which they were created,
// allowing access to variables from an outer scope even after the outer function has returned.

// Basic Closure Pattern
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob'));      // "Hi, Bob!"

// Closure with Private Variables (Module Pattern)
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());   // 2
console.log(counter.decrement()); // 1

// Interview Tip: Closures enable data privacy and encapsulation
// Real-world: Used in jQuery plugins, React hooks, and module systems

// Edge Case: Closures capture variables by reference, not by value
function createFunctions() {
    const functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const funcs = createFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
// With 'let', each closure captures its own 'i' value