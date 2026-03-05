// 5-closure-interview-questions.js
// Closure Interview Questions and Edge Cases
// Common interview scenarios involving closures, scope, and memory management

// Question 1: Classic Loop Closure Problem
console.log('=== Question 1: Loop Closure ===');
function createFunctionsWithVar() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function () {
            return i;
        });
    }
    return functions;
}

const funcsVar = createFunctionsWithVar();
console.log(funcsVar[0]()); // 3 (not 0!)
console.log(funcsVar[1]()); // 3 (not 1!)
console.log(funcsVar[2]()); // 3 (not 2!)

// Solution with let
function createFunctionsWithLet() {
    const functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function () {
            return i;
        });
    }
    return functions;
}

const funcsLet = createFunctionsWithLet();
console.log(funcsLet[0]()); // 0
console.log(funcsLet[1]()); // 1
console.log(funcsLet[2]()); // 2

// Question 2: setTimeout and Closures
console.log('\n=== Question 2: setTimeout Closure ===');
for (var j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log(j); // Prints 3, 3, 3
    }, 100);
}

// Solutions:
// 1. Use IIFE
for (var k = 0; k < 3; k++) {
    (function (index) {
        setTimeout(function () {
            console.log('IIFE:', index);
        }, 200);
    })(k);
}

// 2. Use let
for (let m = 0; m < 3; m++) {
    setTimeout(function () {
        console.log('let:', m);
    }, 300);
}

// Question 3: Closure and 'this'
console.log('\n=== Question 3: Closure and this ===');
const obj = {
    name: 'Object',
    methods: {
        func1: function () {
            return function () {
                return this.name; // 'this' is window/global
            };
        },
        func2: function () {
            return () => this.name; // 'this' is obj
        }
    }
};

const func1 = obj.methods.func1();
const func2 = obj.methods.func2();

console.log(func1()); // undefined
console.log(func2()); // 'Object'

// Question 4: Memory Leak Scenario
console.log('\n=== Question 4: Memory Leak ===');
function createHeavyClosure() {
    const heavyData = new Array(1000000).fill('heavy');

    return function () {
        return heavyData.length;
    };
}

// const heavyClosure = createHeavyClosure();
// heavyClosure(); // Keeps heavyData in memory forever

// Question 5: Closure in Event Handlers
console.log('\n=== Question 5: Event Handler Closure ===');
function setupEventHandler() {
    const button = { id: 'btn1' };

    button.onclick = function () {
        console.log('Button clicked:', this.id); // 'this' is button
    };

    return button;
}

const button = setupEventHandler();
// button.onclick(); // 'Button clicked: btn1'

// Question 6: Private Variables with Closures
console.log('\n=== Question 6: Private Variables ===');
function Counter() {
    let count = 0;

    this.increment = function () {
        count++;
        return count;
    };

    this.getCount = function () {
        return count;
    };
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1 (separate closure)

// Interview Tips:
// - Closures capture variables by reference, not value
// - Use let/const in loops to avoid closure issues
// - Be aware of memory leaks in long-running applications
// - Arrow functions don't create their own 'this' context
// - Closures are created at function definition time, not execution time

// Real-world Edge Case: Closures in React Hooks
// function useCustomHook() {
//     const [count, setCount] = useState(0);
//     const increment = useCallback(() => {
//         setCount(c => c + 1); // Closure captures current count
//     }, []);
//     return increment;
// }