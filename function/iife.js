// --- Immediately Invoked Function Expressions (IIFE) ---

// Example 1: Basic IIFE
(function () {
  console.log("IIFE runs immediately!");
})();

// Example 2: IIFE with Parameters
(function (name) {
  console.log("Hello, " + name + "!");
})("Alice");

// Example 3: IIFE for Encapsulation
var counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    get: function () {
      return count;
    },
  };
})();
console.log(counter.increment()); // 1
console.log(counter.get()); // 1

// --- Note ---
// IIFEs are used to create private scopes and avoid polluting the global namespace.

// --- Interview Case ---
// What will this log?
for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, 100);
  })(i);
}
// Answer: 0 1 2 (each IIFE captures its own 'x')
