// 3. Class Hoisting

// Class declarations are NOT hoisted
try {
  const instance = new MyClass(); // ReferenceError
} catch (e) {
  console.log('Class declaration not hoisted:', e.message);
}

class MyClass {
  constructor() {
    this.value = 42;
  }
}

// Class expressions are not hoisted either
try {
  const instance2 = new MyClassExpr(); // ReferenceError
} catch (e) {
  console.log('Class expression not hoisted:', e.message);
}

var MyClassExpr = class {
  constructor() {
    this.value = 24;
  }
};

// Now they work
const instance1 = new MyClass();
const instance2 = new MyClassExpr();
console.log(instance1.value, instance2.value); // 42, 24

// Static methods are hoisted with the class
class WithStatic {
  static create() {
    return new this();
  }
}

const instance3 = WithStatic.create();
console.log(instance3 instanceof WithStatic); // true

/*
Edge Cases:
- Class declarations must be defined before use
- extends also follows hoisting rules
- Methods are not hoisted separately

Interview Tip: Classes behave like let/const - TDZ applies
Real-world: ES6 class usage, avoiding hoisting-related errors
*/
