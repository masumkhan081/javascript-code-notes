// 3-closure-memory-leaks.js
// Closure Memory Leaks and Performance Considerations
// Closures can cause memory leaks if not handled properly, especially in long-running applications

// Memory Leak Example: Closures holding references to large objects
function createLeak() {
    const largeArray = new Array(1000000).fill('data'); // Large object

    return function() {
        return largeArray.length;
    };
}

// const leakyClosure = createLeak();
// Even after createLeak() returns, largeArray is kept in memory
// because the closure references it

// Proper cleanup pattern
function createManagedClosure() {
    let largeData = new Array(1000000).fill('data');

    const closure = function() {
        return largeData.length;
    };

    // Provide a cleanup method
    closure.cleanup = function() {
        largeData = null; // Allow garbage collection
    };

    return closure;
}

const managedClosure = createManagedClosure();
console.log(managedClosure()); // 1000000
managedClosure.cleanup(); // Clean up memory

// Event Listener Memory Leaks
function addClickHandler(element) {
    let clickCount = 0;

    element.addEventListener('click', function() {
        clickCount++;
        console.log(`Clicked ${clickCount} times`);
    });

    // Without proper cleanup, the closure keeps element alive
    // even if element is removed from DOM
}

// Solution: Use WeakMap or proper cleanup
const handlers = new WeakMap();

function addSafeClickHandler(element) {
    let clickCount = 0;

    const handler = function() {
        clickCount++;
        console.log(`Clicked ${clickCount} times`);
    };

    element.addEventListener('click', handler);
    handlers.set(element, handler);
}

function removeSafeClickHandler(element) {
    const handler = handlers.get(element);
    if (handler) {
        element.removeEventListener('click', handler);
        handlers.delete(element);
    }
}

// Closure in Loops - Classic Memory Issue
function createClosures() {
    const closures = [];

    for (var i = 0; i < 3; i++) {
        closures.push(function() {
            console.log(i); // All closures share the same 'i'
        });
    }

    return closures;
}

const closures = createClosures();
closures[0](); // 3
closures[1](); // 3
closures[2](); // 3

// Solution: Use IIFE or let
function createProperClosures() {
    const closures = [];

    for (let i = 0; i < 3; i++) {
        closures.push(function() {
            console.log(i); // Each closure gets its own 'i'
        });
    }

    return closures;
}

const properClosures = createProperClosures();
properClosures[0](); // 0
properClosures[1](); // 1
properClosures[2](); // 2

// Interview Tip: Always consider memory implications of closures
// Real-world: Long-running web apps, Node.js servers, React components