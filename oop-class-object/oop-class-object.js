// --- OOP: Classes and Objects ---

// Example 1: Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const alice = new Person('Alice', 30);
console.log(alice.greet()); // Hello, my name is Alice

// Example 2: Object Literal
const car = {
    brand: 'Toyota',
    drive() {
        return 'Driving...';
    }
};
console.log(car.drive());

// --- Note ---
// A class is a blueprint for creating objects. Objects are instances with their own data and behavior.
// In JavaScript, you can create objects using classes, constructors, or object literals.

// --- Interview Case ---
// What will this log?
class Animal {
    speak() {
        return 'Generic animal sound';
    }
}
const dog = new Animal();
console.log(dog.speak()); // 'Generic animal sound'
