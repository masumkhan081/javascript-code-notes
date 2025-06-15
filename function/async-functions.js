// --- Async Functions ---

// Example 1: Basic async/await
async function fetchNumber() {
    return 42;
}
fetchNumber().then(console.log); // 42

// Example 2: Awaiting a Promise
async function getData() {
    const result = await Promise.resolve('Data loaded');
    console.log(result);
}
getData(); // Data loaded

// Example 3: Error Handling in async functions
async function failExample() {
    try {
        await Promise.reject('Oops!');
    } catch (e) {
        console.log('Caught:', e);
    }
}
failExample(); // Caught: Oops!

// --- Note ---
// async functions always return a Promise.
// await pauses execution until the Promise resolves/rejects.

// --- Interview Case ---
// What will this log?
async function foo() {
    return 1;
}
foo().then(console.log); // 1
