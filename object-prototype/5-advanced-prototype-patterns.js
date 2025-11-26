// 5. Advanced Prototype Patterns

// 1. Delegation pattern
const calculator = {
  add(a, b) { return a + b; },
  multiply(a, b) { return a * b; }
};

const advancedCalculator = Object.create(calculator);
advancedCalculator.power = function(base, exp) {
  return Math.pow(base, exp);
};

advancedCalculator.divide = function(a, b) {
  return a / b;
};

console.log(advancedCalculator.add(2, 3));      // 5 (delegated)
console.log(advancedCalculator.power(2, 3));   // 8 (own)

// 2. Prototype cloning
function cloneWithPrototype(obj) {
  const clone = Object.create(Object.getPrototypeOf(obj));
  return Object.assign(clone, obj);
}

const original = { name: 'test', value: 42 };
original.__proto__.method = function() { return 'proto method'; };

const cloned = cloneWithPrototype(original);
console.log(cloned.method()); // proto method

// 3. Dynamic prototype modification
function Shape(type) {
  this.type = type;
  // Lazy initialization of prototype
  if (!Shape.prototype.area) {
    Shape.prototype.area = function() {
      switch (this.type) {
        case 'circle': return Math.PI * this.radius ** 2;
        case 'square': return this.side ** 2;
        default: return 0;
      }
    };
  }
}

const circle = new Shape('circle');
circle.radius = 5;
console.log(circle.area()); // 78.54

/*
Edge Cases:
- Prototype changes affect all instances
- instanceof checks can be misleading with dynamic prototypes
- Performance implications of deep prototype chains

Interview Tip: Prototypes enable efficient memory usage and inheritance
Real-world: Library design, object pooling, dynamic behavior extension
*/
