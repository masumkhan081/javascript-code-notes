// --- Function Expressions vs Declarations ---

// Function Declaration
function sayHello() {
    return 'Hello!';
}
console.log(sayHello()); // Hello!

// Function Expression
const sayHi = function() {
    return 'Hi!';
};
console.log(sayHi()); // Hi!

// Named Function Expression
const sayBye = function bye() {
    return 'Bye!';
};
console.log(sayBye()); // Bye!
// console.log(bye()); // ReferenceError: bye is not defined

// --- Note ---
// Declarations are hoisted (can be called before they appear in code).
// Expressions are NOT hoisted (must be defined before use).

// --- Interview Case ---
// What will this log?
try {
    foo();
    var foo = function() { console.log('foo'); };
} catch (e) {
    console.log('Error:', e.message);
}
// Answer: TypeError: foo is not a function (because foo is hoisted as var, but not assigned)
