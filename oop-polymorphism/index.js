// --- OOP: Polymorphism ---

// Example 1: Method Overriding (Runtime Polymorphism)
class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
const shapes = [new Circle(2), new Square(3)];
shapes.forEach(shape => console.log(shape.area())); // 12.566..., 9

// Example 2: Duck Typing (JS Polymorphism)
function printArea(shape) {
    // Works for any object with an area() method
    console.log(shape.area());
}
printArea(new Circle(1));
printArea(new Square(2));

// --- Note ---
// Polymorphism allows different classes to be treated as instances of the same parent (interface/abstract class).
// In JS, duck typing enables polymorphism: if it has the right shape (methods), it works.

// --- Interview Case ---
// What will this log?
class Animal {
    speak() { return 'Some sound'; }
}
class Cat extends Animal {
    speak() { return 'Meow'; }
}
function animalTalk(animal) {
    console.log(animal.speak());
}
animalTalk(new Animal()); // Some sound
animalTalk(new Cat());    // Meow
