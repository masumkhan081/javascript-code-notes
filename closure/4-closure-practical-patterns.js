// 4-closure-practical-patterns.js
// Practical Closure Patterns and Real-World Use Cases
// Closures enable powerful patterns for data encapsulation, memoization, and state management

// 1. Module Pattern (Revealing Module Pattern)
const Calculator = (function() {
    let memory = 0;

    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function store(value) {
        memory = value;
    }

    function recall() {
        return memory;
    }

    function clear() {
        memory = 0;
    }

    // Reveal only public methods
    return {
        add,
        subtract,
        store,
        recall,
        clear
    };
})();

console.log(Calculator.add(5, 3));    // 8
Calculator.store(42);
console.log(Calculator.recall());     // 42

// 2. Memoization with Closures
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);
console.time('First call');
console.log(memoizedFib(40)); // Takes time
console.timeEnd('First call');

console.time('Second call (cached)');
console.log(memoizedFib(40)); // Instant
console.timeEnd('Second call (cached)');

// 3. Currying with Closures
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
const multiplyBy2 = curriedMultiply(2);
const multiplyBy2And3 = multiplyBy2(3);

console.log(multiplyBy2And3(4)); // 24
console.log(curriedMultiply(2)(3)(4)); // 24

// 4. Iterator Pattern
function createIterator(array) {
    let index = 0;

    return {
        next: function() {
            return index < array.length ?
                { value: array[index++], done: false } :
                { done: true };
        },
        hasNext: function() {
            return index < array.length;
        }
    };
}

const iterator = createIterator([1, 2, 3, 4, 5]);
while (iterator.hasNext()) {
    console.log(iterator.next().value);
}

// 5. Debounce with Closures
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function search(query) {
    console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(search, 300);
// debouncedSearch('hello'); // Only executes after 300ms of no calls

// Interview Tip: Closures are fundamental to functional programming in JS
// Real-world: React hooks, Redux middleware, Express middleware, jQuery plugins