// 2-closure-scope-capture.js
// Closure Scope Capture: How Closures Interact with Different Scopes
// Closures capture the entire lexical environment, not just individual variables

// Nested Closures and Scope Chain
function outerFunction(outerParam) {
    let outerVar = 'outer';

    return function middleFunction(middleParam) {
        let middleVar = 'middle';

        return function innerFunction(innerParam) {
            // This closure captures: outerParam, outerVar, middleParam, middleVar, innerParam
            return {
                outerParam,
                outerVar,
                middleParam,
                middleVar,
                innerParam
            };
        };
    };
}

const middleFunc = outerFunction('outer value');
const innerFunc = middleFunc('middle value');
console.log(innerFunc('inner value'));
// { outerParam: 'outer value', outerVar: 'outer', middleParam: 'middle value', middleVar: 'middle', innerParam: 'inner value' }

// Closure with Global Scope Capture
let globalVar = 'global';

function captureGlobal() {
    return function() {
        return globalVar;
    };
}

const getGlobal = captureGlobal();
console.log(getGlobal()); // 'global'

// Modifying captured variables
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Interview Question: What happens with closures and 'this'?
const obj = {
    name: 'Object',
    getNameFunc: function() {
        return function() {
            return this.name; // 'this' refers to global object, not obj!
        };
    }
};

const getName = obj.getNameFunc();
console.log(getName()); // undefined (in strict mode) or window.name

// Solution: Use arrow function or bind 'this'
const objFixed = {
    name: 'Object',
    getNameFunc: function() {
        return () => this.name; // Arrow function captures 'this'
    }
};

const getNameFixed = objFixed.getNameFunc();
console.log(getNameFixed()); // 'Object'

// Real-world: Event handlers, setTimeout callbacks, and async operations