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
