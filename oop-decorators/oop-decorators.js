// --- OOP: Decorators (Experimental in JS, Common in TS) ---

// JavaScript decorators are a stage 3 proposal, but you can simulate them or use TypeScript.
// Example: Logging decorator (manual simulation)
function logMethod(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`Calling ${key} with`, args);
        return original.apply(this, args);
    };
    return descriptor;
}

class Example {
    sayHi(name) {
        return `Hi, ${name}`;
    }
}
// Simulate decorator usage:
const desc = Object.getOwnPropertyDescriptor(Example.prototype, 'sayHi');
Object.assign(desc, logMethod(Example.prototype, 'sayHi', desc));
Object.defineProperty(Example.prototype, 'sayHi', desc);

const ex = new Example();
console.log(ex.sayHi('Alice')); // Logs: Calling sayHi with ['Alice'] then returns 'Hi, Alice'

// --- Note ---
// Decorators wrap or modify class members. Common in TypeScript (e.g., @readonly, @log).
// In JS, use higher-order functions or proxies for similar patterns.

// --- Interview Case ---
// What will this log?
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
class Demo {
    value = 1;
    // @readonly (simulate)
    getVal() { return this.value; }
}
const d = new Demo();
d.getVal = function() { return 2; }; // Fails silently or throws in strict mode
console.log(d.getVal()); // 1
