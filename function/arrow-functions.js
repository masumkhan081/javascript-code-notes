// --- Arrow Functions and Lexical this ---

// Note: Arrow functions provide a concise syntax and do NOT have their own 'this'.

// Example 1: Basic Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Example 2: Lexical this
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        if (this.seconds <= 3) console.log(this.seconds);
    }, 1000);
}
// new Timer(); // Uncomment to see lexical 'this' in action

// Example 3: Arrow vs Regular Function in Object
const obj = {
    value: 42,
    regularFunc: function() { return this.value; },
    arrowFunc: () => this.value
};
console.log(obj.regularFunc()); // 42
console.log(obj.arrowFunc());   // undefined (arrow's 'this' is not obj)

// --- Note ---
// Arrow functions are best for callbacks, short functions, and when you want to inherit 'this' from the outer scope.
// They cannot be used as constructors and do not have their own 'arguments' object.

// --- Interview Case ---
// What will this log?
const person = {
    name: 'Alice',
    greet: () => console.log('Hello, ' + this.name)
};
person.greet(); // 'Hello, undefined' (because 'this' is not person)
