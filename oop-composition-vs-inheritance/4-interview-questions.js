// 4. Interview Questions and Tricky Scenarios

// Question 1: Diamond Problem in Multiple Inheritance (JS doesn't have this, but conceptual)
class A { method() { return 'A'; } }
class B extends A { method() { return 'B'; } }
class C extends A { method() { return 'C'; } }
// class D extends B, C {} // Not possible in JS - no multiple inheritance

// Workaround with composition
function createD() {
  const b = new B();
  const c = new C();
  return {
    method() {
      // Choose which one to use
      return b.method(); // or c.method()
    }
  };
}

// Question 2: Method Resolution Order
class GrandParent {
  greet() { return 'Hello from GrandParent'; }
}

class Parent extends GrandParent {
  greet() { return super.greet() + ' and Parent'; }
}

class Child extends Parent {
  greet() { return super.greet() + ' and Child'; }
}

console.log(new Child().greet()); // Hello from GrandParent and Parent and Child

// Question 3: Composition with method conflicts
const logger = {
  log: (msg) => console.log('Logger:', msg)
};

const debugTool = {
  log: (msg) => console.error('Debug:', msg)
};

const composed = { ...logger, ...debugTool }; // debugTool.log wins
composed.log('test'); // Debug: test

/*
Edge Cases:
- Prototype chain lookup performance
- Memory usage of composed objects vs inherited
- Testing composed behaviors

Interview Tip: Know the trade-offs - inheritance for polymorphism, composition for flexibility
Real-world: Game entities with multiple abilities, plugin systems, configurable objects
*/
