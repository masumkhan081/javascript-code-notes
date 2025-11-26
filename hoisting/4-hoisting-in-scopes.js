// 4. Hoisting in Different Scopes

// Global scope hoisting
console.log(globalVar); // undefined
var globalVar = 'global';

// Function scope hoisting
function outer() {
  console.log(outerVar); // undefined
  var outerVar = 'outer';

  function inner() {
    console.log(innerVar); // undefined
    var innerVar = 'inner';
    console.log(innerVar); // inner
  }

  inner();
  console.log(outerVar); // outer
}
outer();

// Block scope with var (hoisted to function)
function blockScope() {
  if (true) {
    console.log(blockVar); // undefined (hoisted to function)
    var blockVar = 'block';
  }
  console.log(blockVar); // block (accessible outside block)
}
blockScope();

// Block scope with let/const (not hoisted)
function blockScopeLet() {
  if (true) {
    // console.log(blockLet); // ReferenceError
    let blockLet = 'block let';
    console.log(blockLet); // block let
  }
  // console.log(blockLet); // ReferenceError
}
// blockScopeLet();

/*
Edge Cases:
- var ignores block scope, hoists to function/global
- let/const respect block scope, no hoisting
- Nested functions create separate scopes

Interview Tip: var hoisting can cause bugs - prefer let/const
Real-world: Understanding scope chains, avoiding variable leaks
*/
