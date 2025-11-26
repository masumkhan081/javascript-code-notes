// 1. Variable Hoisting Deep Dive

// var hoisting: Declaration moved to top, initialization stays
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Function scope hoisting
function testVar() {
  console.log(x); // undefined (hoisted)
  if (true) {
    var x = 20;
  }
  console.log(x); // 20 (function scoped)
}
testVar();

// let/const: Temporal Dead Zone (TDZ)
function testLet() {
  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 30;
  console.log(y); // 30
}
// testLet();

// Hoisting order: Function declarations > var > let/const
function orderTest() {
  console.log(func); // [Function: func]
  console.log(varDecl); // undefined
  // console.log(letDecl); // ReferenceError

  function func() {}
  var varDecl = 'var';
  let letDecl = 'let';
}
// orderTest();

/*
Edge Cases:
- Function declarations hoist with definition
- var declarations hoist with undefined
- let/const create TDZ - no hoisting illusion

Interview Tip: Hoisting is compilation behavior, not runtime moving
Real-world: Understanding variable scope, avoiding TDZ errors
*/
