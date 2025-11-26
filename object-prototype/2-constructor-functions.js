// 2. Constructor Functions and new Keyword

// Constructor function
function Person(name, age) {
  // 'this' refers to the new object
  this.name = name;
  this.age = age;

  // Methods can be added to instance
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
}

// Adding methods to prototype (better practice)
Person.prototype.introduce = function() {
  return `I'm ${this.name}, ${this.age} years old`;
};

Person.prototype.species = 'Human'; // Shared property

// Using 'new' keyword
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.greet());       // Hello, I'm Alice
console.log(person1.introduce());   // I'm Alice, 30 years old
console.log(person2.introduce());   // I'm Bob, 25 years old

console.log(person1.species);       // Human (shared)
console.log(person2.species);       // Human (shared)

// Check constructor
console.log(person1.constructor === Person); // true
console.log(person1 instanceof Person);      // true

// Without 'new' (anti-pattern)
const person3 = Person('Charlie', 35); // this === global/window
console.log(person3); // undefined
console.log(global.name); // Charlie (polluted global scope!)

/*
Edge Cases:
- Forgetting 'new' causes global pollution
- Constructor returning object overrides 'new'
- Arrow functions can't be constructors

Interview Tip: 'new' creates object, sets prototype, calls constructor
Real-world: Legacy code, understanding class transpilation
*/
