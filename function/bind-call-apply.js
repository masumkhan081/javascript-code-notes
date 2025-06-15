// --- Function Binding: bind, call, apply ---

const person = { name: 'Alice' };

function sayHello(greeting) {
    return `${greeting}, ${this.name}`;
}

// call
console.log(sayHello.call(person, 'Hi')); // Hi, Alice

// apply
console.log(sayHello.apply(person, ['Hello'])); // Hello, Alice

// bind
const boundHello = sayHello.bind(person, 'Hey');
console.log(boundHello()); // Hey, Alice

// --- Note ---
// call/apply invoke the function immediately with a given 'this' value.
// bind returns a new function with bound 'this' and optional preset arguments.

// --- Interview Case ---
// What will this log?
const obj = {
    x: 42,
    getX: function() {
        return this.x;
    }
};
const unboundGetX = obj.getX;
const boundGetX = obj.getX.bind(obj);
console.log(unboundGetX()); // undefined (or window.x in browser)
console.log(boundGetX()); // 42
