// 4. Static Methods and Properties Inheritance

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  // Static method
  static createSquare(size) {
    return new this(size, size);
  }

  // Static property
  static get type() {
    return 'Shape';
  }
}

class Rectangle extends Shape {
  // Inherit static method
  // Override static property
  static get type() {
    return 'Rectangle';
  }

  // Add new static method
  static createFromDimensions(width, height) {
    return new this(width, height);
  }
}

class Square extends Rectangle {
  static get type() {
    return 'Square';
  }
}

// Using inherited static methods
const rect = Rectangle.createSquare(10); // Inherited from Shape
console.log(rect.area()); // 100
console.log(rect.constructor.type); // Rectangle

const square = Square.createFromDimensions(5, 5); // Inherited from Rectangle
console.log(square.area()); // 25
console.log(square.constructor.type); // Square

// Static method inheritance
console.log(Shape.createSquare(4).area()); // 16

/*
Edge Cases:
- Static methods are not inherited by instances, only by classes
- this in static methods refers to the class, not instance
- Static properties are inherited but can be overridden

Interview Tip: Static members belong to the class, not instances
Real-world: Factory methods, utility functions, class-level constants
*/
