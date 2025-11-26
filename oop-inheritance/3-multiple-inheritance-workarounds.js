// 3. Multiple Inheritance Workarounds

// JavaScript doesn't support multiple inheritance, but we can simulate it

// Mixin approach
const Swimmer = {
  swim() {
    return `${this.name} is swimming`;
  }
};

const Flyer = {
  fly() {
    return `${this.name} is flying`;
  }
};

const Walker = {
  walk() {
    return `${this.name} is walking`;
  }
};

// Multiple inheritance simulation
function Duck(name) {
  this.name = name;
}

// Copy methods from mixins
Object.assign(Duck.prototype, Swimmer, Flyer, Walker);

const duck = new Duck('Donald');
console.log(duck.swim()); // Donald is swimming
console.log(duck.fly());  // Donald is flying
console.log(duck.walk()); // Donald is walking

// Alternative: Composition with classes
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Duck2 extends Animal {
  constructor(name) {
    super(name);
  }

  // Mix in abilities
  abilities() {
    return {
      ...Swimmer,
      ...Flyer,
      ...Walker
    };
  }
}

const duck2 = new Duck2('Daisy');
const abilities = duck2.abilities();
console.log(abilities.swim.call(duck2)); // Daisy is swimming

/*
Edge Cases:
- Method conflicts: Last mixin wins
- this context: Must bind methods correctly
- Performance: Multiple Object.assign calls

Interview Tip: Multiple inheritance is complex - prefer composition
Real-world: Character abilities in games, plugin systems, trait mixing
*/
