// --- Closure Examples ---

// Example 1: Basic Closure
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1

// Example 2: Closure Capturing Outer Variables
function outer() {
    let outerVar = 'I am outside!';
    function inner() {
        return outerVar;
    }
    return inner;
}
const getOuterVar = outer();
console.log(getOuterVar()); // 'I am outside!'

// Example 3: Closure in Loops (Interview Classic)
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function() {
        return i;
    };
}
console.log(funcs[0]()); // 3 (not 0!)
console.log(funcs[1]()); // 3 (not 1!)
console.log(funcs[2]()); // 3 (not 2!)
// Because 'i' is shared and closed over, not copied per iteration.

// Correct version using IIFE (Immediately Invoked Function Expression):
var fixedFuncs = [];
for (var j = 0; j < 3; j++) {
    fixedFuncs[j] = (function(x) {
        return function() {
            return x;
        };
    })(j);
}
console.log(fixedFuncs[0]()); // 0
console.log(fixedFuncs[1]()); // 1
console.log(fixedFuncs[2]()); // 2

// --- Example Case: Interview Style ---

// What will be the output?
function secretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}
const holder = secretHolder('JS');
console.log(holder.getSecret()); // 'JS'
holder.setSecret('Closures');
console.log(holder.getSecret()); // 'Closures'

// Explanation:
// 1. secret is private to the closure and can't be accessed directly from outside.
// 2. Only getSecret and setSecret (returned methods) can access or modify it.
// 3. This is a classic use of closures for data encapsulation in JavaScript.
