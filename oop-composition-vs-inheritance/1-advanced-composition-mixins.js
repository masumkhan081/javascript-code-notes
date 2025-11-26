// 1. Advanced Composition Patterns - Mixins and Functional Composition

// Mixin pattern: Reusable behavior modules
const canFly = {
  fly() { return `${this.name} is flying`; }
};

const canSwim = {
  swim() { return `${this.name} is swimming`; }
};

const canWalk = {
  walk() { return `${this.name} is walking`; }
};

// Composition using Object.assign
class Animal {
  constructor(name) {
    this.name = name;
  }
}

function createBird(name) {
  return Object.assign(new Animal(name), canFly, canWalk);
}

function createFish(name) {
  return Object.assign(new Animal(name), canSwim);
}

function createDuck(name) {
  return Object.assign(new Animal(name), canFly, canSwim, canWalk);
}

const bird = createBird('Eagle');
const fish = createFish('Salmon');
const duck = createDuck('Donald');

console.log(bird.fly());   // Eagle is flying
console.log(fish.swim());  // Salmon is swimming
console.log(duck.swim());  // Donald is swimming

/*
Edge Cases:
- Property conflicts: If mixins have same method names, last one wins
- this context: Mixins must be careful with 'this' binding
- Memory: Each composed object gets its own copies of methods

Interview Tip: Mixins provide multiple inheritance without classical inheritance issues
Real-world: Used in game development for character abilities, UI component behaviors
*/
