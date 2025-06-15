// --- OOP: Inheritance ---

// Example 1: Class Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
const dog = new Dog('Rex');
console.log(dog.speak()); // Rex barks.

// Example 2: Inheriting Properties and Methods
class Bird extends Animal {
    fly() {
        return `${this.name} is flying!`;
    }
}
const bird = new Bird('Tweety');
console.log(bird.speak()); // Tweety makes a noise.
console.log(bird.fly());   // Tweety is flying!

// --- Note ---
// Inheritance allows a class to acquire properties and methods of another class.
// Use 'extends' for class inheritance. Use 'super' to call the parent constructor or methods.

// --- Interview Case ---
// What will this log?
class Parent {
    greet() { return 'Hello from Parent'; }
}
class Child extends Parent {
    greet() { return super.greet() + ' and Child'; }
}
const c = new Child();
console.log(c.greet()); // 'Hello from Parent and Child'
