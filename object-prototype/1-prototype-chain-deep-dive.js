// 1. Prototype Chain Deep Dive

// Understanding prototype chain lookup
const animal = {
  type: 'Animal',
  speak() {
    return 'Animal sound';
  }
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.bark = function() {
  return 'Woof!';
};

console.log(dog.name);        // Rex (own property)
console.log(dog.type);        // Animal (inherited)
console.log(dog.speak());      // Animal sound (inherited)
console.log(dog.bark());       // Woof! (own method)

// Prototype chain inspection
console.log(dog.__proto__ === animal);                    // true
console.log(dog.__proto__.__proto__ === Object.prototype); // true
console.log(dog.__proto__.__proto__.__proto__);           // null

// Property descriptors
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
// { value: 'Rex', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(dog, 'type')); // undefined (inherited)

/*
Edge Cases:
- hasOwnProperty vs property in object
- Prototype chain traversal performance
- null prototype objects

Interview Tip: Prototype chain is live - changes to parent affect children
Real-world: Understanding inheritance, property lookup optimization
*/
