// 3. Error Handling in Async Functions

// Async functions throw errors that become rejected Promises
async function rejectionExample() {
  throw new Error('💥 Async error!');
}

// Handling with .catch()
rejectionExample()
  .then(() => console.log('Success'))
  .catch(err => console.log('Caught:', err.message));

// Handling with try/catch in async function
async function safeAsyncCall() {
  try {
    await rejectionExample();
    console.log('This won\'t run');
  } catch (error) {
    console.log('Handled in try/catch:', error.message);
  }
}

// safeAsyncCall();

/*
Edge Cases:
- Unhandled rejections crash Node.js (use --unhandled-rejections=strict)
- Async function throwing sync error still returns rejected Promise
- Nested try/catch - inner catch handles, outer doesn't see it

Interview Tip: Prefer async/await + try/catch for cleaner error handling than .catch() chains
Real-world: API error handling, file operations, database connections
*/
