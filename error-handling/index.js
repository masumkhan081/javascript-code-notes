// 1. Synchronous Error Handling
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Throws error
} catch (error) {
  console.log('Caught sync error:', error.message);
}

// 2. Asynchronous Error Handling with Promises
function asyncDivide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error('Async division by zero'));
    } else {
      setTimeout(() => resolve(a / b), 100);
    }
  });
}

asyncDivide(10, 2)
  .then(result => console.log('Async result:', result))
  .catch(error => console.log('Caught async error:', error.message));

asyncDivide(10, 0)
  .catch(error => console.log('Caught async error:', error.message));

// 3. Async/Await Error Handling
async function safeAsyncDivide(a, b) {
  try {
    const result = await asyncDivide(a, b);
    console.log('Async/await result:', result);
  } catch (error) {
    console.log('Caught in async/await:', error.message);
  }
}

safeAsyncDivide(10, 2);
safeAsyncDivide(10, 0);

// 4. Error Propagation in Callbacks
function callbackDivide(a, b, callback) {
  if (b === 0) {
    return callback(new Error('Callback division by zero'));
  }
  callback(null, a / b);
}

callbackDivide(10, 2, (error, result) => {
  if (error) {
    console.log('Callback error:', error.message);
  } else {
    console.log('Callback result:', result);
  }
});

// 5. Custom Error Classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('Name is required');
  }
  // Simulate DB error
  throw new DatabaseError('Connection failed');
}

try {
  validateUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation issue:', error.message);
  } else if (error instanceof DatabaseError) {
    console.log('DB issue:', error.message);
  } else {
    console.log('Unknown error:', error.message);
  }
}

// 6. Global Error Handlers (Node.js)
process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception:', error.message);
  // In production, log to file and exit gracefully
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Log and handle
});

// Trigger unhandled rejection
Promise.reject(new Error('Unhandled promise rejection'));

// 7. Error Boundaries (for frameworks like React, but conceptual)
class ErrorBoundary {
  constructor() {
    this.hasError = false;
  }

  catch(error) {
    this.hasError = true;
    console.log('Error boundary caught:', error.message);
  }
}

// Usage simulation
const boundary = new ErrorBoundary();
try {
  throw new Error('Component error');
} catch (error) {
  boundary.catch(error);
}

/*
Summary:
- Use try/catch for sync errors
- .catch() for Promises, try/catch for async/await
- Custom errors for better error classification
- Global handlers prevent crashes in Node.js
- Error boundaries for UI frameworks
*/
