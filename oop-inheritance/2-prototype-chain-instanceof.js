// 2. Prototype Chain and instanceof

// Understanding the prototype chain
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return `${this.name} barks!`;
};

Dog.prototype.breedInfo = function() {
  return `${this.name} is a ${this.breed}`;
};

const dog = new Dog('Rex', 'Golden Retriever');

console.log(dog.speak());        // Rex barks!
console.log(dog.breedInfo());    // Rex is a Golden Retriever
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(dog instanceof Object);  // true

// Prototype chain inspection
console.log(dog.__proto__ === Dog.prototype);        // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true

/*
Edge Cases:
- instanceof checks the entire prototype chain
- Object.create() creates clean prototype links
- Constructor property needs manual fixing after prototype assignment

Interview Tip: Explain how instanceof works vs typeof
Real-world: Custom instanceof checks, prototype inspection, inheritance debugging
*/
