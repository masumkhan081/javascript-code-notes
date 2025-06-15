// --- OOP: Composition vs Inheritance ---

// Inheritance: "is-a" relationship
class Engine {
    start() { return 'Engine started'; }
}
class Car extends Engine {
    drive() { return 'Car is driving'; }
}
const car = new Car();
console.log(car.start()); // Engine started
console.log(car.drive()); // Car is driving

// Composition: "has-a" relationship
function createCar() {
    const engine = {
        start() { return 'Engine started'; }
    };
    const car = {
        drive() { return 'Car is driving'; },
        ...engine
    };
    return car;
}
const composedCar = createCar();
console.log(composedCar.start()); // Engine started
console.log(composedCar.drive()); // Car is driving

// --- Note ---
// Inheritance is best for "is-a" relationships and shared base logic.
// Composition is more flexible, avoids deep hierarchies, and enables code reuse.
// Favor composition when you want to combine behaviors from multiple sources.

// --- Interview Case ---
// What will this log?
const canEat = state => ({
    eat: () => `${state.name} is eating`
});
const canWalk = state => ({
    walk: () => `${state.name} is walking`
});
function Person(name) {
    const state = { name };
    return {
        ...canEat(state),
        ...canWalk(state)
    };
}
const bob = Person('Bob');
console.log(bob.eat()); // Bob is eating
console.log(bob.walk()); // Bob is walking
