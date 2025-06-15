// --- OOP: Static Members ---

// Example 1: Static Methods
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtil.add(2, 3)); // 5
// MathUtil.add is called on the class, not an instance

// Example 2: Static Properties (ES2022+)
class Counter {
    static count = 0;
    constructor() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}
new Counter();
new Counter();
console.log(Counter.getCount()); // 2

// --- Note ---
// Static members belong to the class, not to instances.
// Use static methods for utility functions and static properties for shared state.

// --- Interview Case ---
// What will this log?
class Foo {
    static bar = 42;
    static getBar() { return this.bar; }
}
console.log(Foo.bar); // 42
console.log(Foo.getBar()); // 42
const f = new Foo();
console.log(f.bar); // undefined
