// --- OOP: Abstract Classes (Simulated in JS) ---

// JavaScript does not have true abstract classes, but you can simulate them.
class AbstractAnimal {
    constructor() {
        if (new.target === AbstractAnimal) {
            throw new Error('Cannot instantiate abstract class!');
        }
    }
    speak() {
        throw new Error('speak() must be implemented by subclass');
    }
}

class Dog extends AbstractAnimal {
    speak() {
        return 'Woof!';
    }
}

// const animal = new AbstractAnimal(); // Error: Cannot instantiate abstract class!
const rex = new Dog();
console.log(rex.speak()); // Woof!

// --- Note ---
// Abstract classes are meant to be inherited, not instantiated directly.
// Force subclasses to implement required methods by throwing errors in the base class.

// --- Interview Case ---
// What will this log?
class AbstractShape {
    area() { throw new Error('Implement area()!'); }
}
class Square extends AbstractShape {
    area() { return 4; }
}
const sq = new Square();
console.log(sq.area()); // 4
