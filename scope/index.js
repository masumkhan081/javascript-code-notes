// --- JavaScript Scope Examples ---

// 1. Global Scope
var globalVar = 'I am global';
function showGlobal() {
    console.log(globalVar);
}
showGlobal(); // I am global

// 2. Function Scope
function funcScope() {
    var funcVar = 'I am function scoped';
    console.log(funcVar);
}
funcScope(); // I am function scoped
// console.log(funcVar); // ReferenceError

// 3. Block Scope (let/const)
if (true) {
    let blockLet = 'Block scoped';
    const blockConst = 'Also block scoped';
    console.log(blockLet, blockConst);
}
// console.log(blockLet); // ReferenceError

// 4. var is NOT block scoped
if (true) {
    var notBlock = 'Not block scoped';
}
console.log(notBlock); // Not block scoped

// 5. Lexical Scope
function outer() {
    let outerVar = 'outer';
    function inner() {
        console.log(outerVar); // Has access to outerVar
    }
    inner();
}
outer(); // outer

// 6. Scope Pitfall: var hoisting
function hoistExample() {
    console.log(a); // undefined (var is hoisted)
    var a = 5;
}
hoistExample();

// --- Note ---
// - Global scope: accessible everywhere.
// - Function scope: var, function declarations.
// - Block scope: let, const.
// - Lexical scope: inner functions access outer variables.
// - var is function scoped, let/const are block scoped.

// --- Interview Case ---
// What will this log?
let x = 10;
function test() {
    if (false) {
        var y = 20;
        let z = 30;
    }
    console.log(typeof y); // ?
    // console.log(typeof z); // ReferenceError
}
test(); // 'undefined'
