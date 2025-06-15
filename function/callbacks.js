// --- Callbacks ---

// Example 1: Basic Callback
function fetchData(callback) {
    setTimeout(function() {
        callback('Data loaded');
    }, 100);
}
fetchData(function(result) {
    console.log(result); // Data loaded
});

// Example 2: Array forEach (callback)
[1, 2, 3].forEach(function(num) {
    console.log(num * 2);
});

// --- Note ---
// A callback is a function passed as an argument to another function, to be called later.
// Common in async code, event handling, and array methods.

// --- Interview Case ---
// What will this log?
function doTwice(fn) {
    fn();
    fn();
}
doTwice(function() { console.log('Hello'); });
// Output: Hello\nHello
