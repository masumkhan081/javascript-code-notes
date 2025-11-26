// 5. Hoisting Interview Questions and Edge Cases

// Question 1: Variable vs Function hoisting
var variable = 'var';
function variable() { return 'function'; }
console.log(typeof variable); // 'string' (var assignment wins)

// Question 2: Multiple var declarations
var x = 1;
var x = 2;
console.log(x); // 2 (last assignment wins)

// Question 3: Function redeclaration
function foo() { return 1; }
function foo() { return 2; }
console.log(foo()); // 2 (last declaration wins)

// Question 4: var in loop (classic gotcha)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // Prints 0, 1, 2
}

// Question 5: Hoisting with default parameters
function defaultParams(a = b, b = 2) {
  return a + b;
}
try {
  console.log(defaultParams()); // ReferenceError: b is not defined
} catch (e) {
  console.log('Default params TDZ:', e.message);
}

/*
Edge Cases:
- Parameter hoisting in function declarations
- Hoisting in strict vs non-strict mode
- Module hoisting (ES6 modules)

Interview Tip: Hoisting is about declaration order in compilation
Real-world: Debugging scope issues, understanding closure behavior
*/
