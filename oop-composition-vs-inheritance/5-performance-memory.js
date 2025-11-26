// 5. Performance and Memory Considerations

// Inheritance: Shared prototype methods (memory efficient)
class HeavyObject {
  constructor(data) {
    this.data = data; // Instance-specific
  }

  heavyMethod() {
    // This method is shared on prototype
    return this.data.map(x => x * 2);
  }
}

// Composition: Each composed object gets its own method copies
function createHeavyComposed(data) {
  return {
    data,
    heavyMethod() {
      // This method is duplicated for each object
      return this.data.map(x => x * 2);
    }
  };
}

// Benchmark
const iterations = 10000;
console.time('Inheritance');
for (let i = 0; i < iterations; i++) {
  const obj = new HeavyObject([1, 2, 3, 4, 5]);
  obj.heavyMethod();
}
console.timeEnd('Inheritance');

console.time('Composition');
for (let i = 0; i < iterations; i++) {
  const obj = createHeavyComposed([1, 2, 3, 4, 5]);
  obj.heavyMethod();
}
console.timeEnd('Composition');

/*
Edge Cases:
- Inheritance: Faster method lookup, less memory for methods
- Composition: More memory usage, but no prototype chain overhead
- V8 optimization: Both are well-optimized in modern JS engines

Interview Tip: Performance difference is usually negligible - choose based on design needs
Real-world: Inheritance for framework base classes, composition for user-configurable objects
*/
