// 3. Object.create() and Property Descriptors

// Object.create() with property descriptors
const personProto = {
  greet() {
    return `Hello from ${this.name}`;
  }
};

const person = Object.create(personProto, {
  name: {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,    // Cannot change
    enumerable: true,
    configurable: false // Cannot delete or reconfigure
  }
});

console.log(person.name);     // Alice
console.log(person.greet());  // Hello from Alice

// Try to modify read-only property
person.age = 31;
console.log(person.age);      // 30 (unchanged)

// Check property descriptors
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Alice', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// { value: 30, writable: false, enumerable: true, configurable: false }

// Define property dynamically
Object.defineProperty(person, 'job', {
  value: 'Developer',
  enumerable: false // Won't show in for...in
});

console.log(person.job); // Developer
console.log(Object.keys(person)); // ['name', 'age'] (job not enumerable)

/*
Edge Cases:
- Non-enumerable properties invisible to for...in
- Non-writable properties can't be changed
- Non-configurable properties can't be deleted

Interview Tip: Property descriptors control object behavior
Real-world: Creating immutable objects, hiding internal properties
*/
