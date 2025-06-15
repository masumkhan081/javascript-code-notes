// --- OOP: Mixins ---

// Mixin: A function that adds properties/methods to a class
const Flyable = Base => class extends Base {
    fly() { return `${this.name} is flying!`; }
};
const Swimmable = Base => class extends Base {
    swim() { return `${this.name} is swimming!`; }
};

class Animal {
    constructor(name) { this.name = name; }
}

// Compose mixins
class Duck extends Flyable(Swimmable(Animal)) {}

const donald = new Duck('Donald');
console.log(donald.fly());   // Donald is flying!
console.log(donald.swim());  // Donald is swimming!

// --- Note ---
// Mixins let you compose behaviors from multiple sources, avoiding deep inheritance chains.
// Use functions that return classes, and apply multiple mixins as needed.

// --- Interview Case ---
// What will this log?
class Robot {}
const Talking = Base => class extends Base {
    talk() { return 'Beep boop'; }
};
class TalkingRobot extends Talking(Robot) {}
const r = new TalkingRobot();
console.log(r.talk()); // Beep boop
