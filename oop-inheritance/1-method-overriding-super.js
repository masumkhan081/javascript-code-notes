// 1. Advanced Inheritance Patterns - Method Overriding and super()

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }

  start() {
    return `${this.getInfo()} is starting...`;
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model); // Call parent constructor
    this.doors = doors;
  }

  // Override getInfo
  getInfo() {
    return `${super.getInfo()} with ${this.doors} doors`;
  }

  // Override start with additional behavior
  start() {
    const parentStart = super.start();
    return `${parentStart} Vroom!`;
  }

  honk() {
    return `${this.make} ${this.model} honks!`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, doors, batteryLife) {
    super(make, model, doors);
    this.batteryLife = batteryLife;
  }

  // Override start for electric behavior
  start() {
    return `${this.getInfo()} is starting silently...`;
  }

  charge() {
    return `${this.make} ${this.model} is charging...`;
  }
}

const tesla = new ElectricCar('Tesla', 'Model 3', 4, '300 miles');
console.log(tesla.start());    // Tesla Model 3 with 4 doors is starting silently...
console.log(tesla.honk());     // Tesla Model 3 honks!
console.log(tesla.charge());   // Tesla Model 3 is charging...

/*
Edge Cases:
- super() must be called before using 'this' in derived constructor
- Method overriding: Can call super.method() or completely replace
- Property shadowing: Instance properties can shadow inherited ones

Interview Tip: Understand prototype chain and method resolution order
Real-world: Framework base classes, UI component hierarchies, game object inheritance
*/
