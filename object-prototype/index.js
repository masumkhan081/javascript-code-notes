// WARNING: Modifying Object.prototype is generally discouraged in production code because it can lead to conflicts and bugs.
// These examples are for educational purposes only.

// Example 1: Adding a custom function to Object.prototype
if (!Object.prototype.describe) {
  Object.defineProperty(Object.prototype, 'describe', {
    value: function() {
      return `This object has keys: ${Object.keys(this).join(', ')}`;
    },
    enumerable: false // Prevents this property from showing up in for...in loops
  });
}

// Usage:
const obj1 = { a: 1, b: 2 };
console.log(obj1.describe()); // Output: This object has keys: a, b

// Example 2: Adding a custom property/object to Object.prototype
if (!Object.prototype.metaInfo) {
  Object.defineProperty(Object.prototype, 'metaInfo', {
    value: { createdBy: 'custom', version: 1 },
    writable: true,
    enumerable: false,
    configurable: true
  });
}

// Usage:
const obj2 = { x: 10 };
console.log(obj2.metaInfo); // Output: { createdBy: 'custom', version: 1 }

// Example 3: Overriding metaInfo for a specific object
obj2.metaInfo = { createdBy: 'user', version: 2 };
console.log(obj2.metaInfo); // Output: { createdBy: 'user', version: 2 }

// Demonstrate that built-in objects inherit the prototype extension
console.log([1,2,3].describe()); // Output: This object has keys: 0, 1, 2

// Clean up (optional): Remove custom prototype extensions if needed
// delete Object.prototype.describe;
// delete Object.prototype.metaInfo;

// Summary:
// - Use Object.defineProperty to avoid polluting for...in loops.
// - Always check if the property exists before defining.
// - Avoid in production unless absolutely necessary.


// =============================
// Array.prototype Extension Example
// =============================
// WARNING: Modifying Array.prototype is discouraged in production for the same reasons as Object.prototype.
// This is for educational/demo purposes only.

// Example: Add a custom function to Array.prototype
if (!Array.prototype.firstAndLast) {
  Object.defineProperty(Array.prototype, 'firstAndLast', {
    value: function() {
      if (this.length === 0) return { first: undefined, last: undefined };
      return { first: this[0], last: this[this.length - 1] };
    },
    enumerable: false
  });
}

// Usage:
const arr = [10, 20, 30, 40];
console.log(arr.firstAndLast()); // Output: { first: 10, last: 40 }

// Chaining with default methods:
const mapped = arr.map(x => x * 2).firstAndLast();
console.log(mapped); // Output: { first: 20, last: 80 }

// Works with empty arrays too:
console.log([].firstAndLast()); // Output: { first: undefined, last: undefined }

// Clean up (optional):
// delete Array.prototype.firstAndLast;
