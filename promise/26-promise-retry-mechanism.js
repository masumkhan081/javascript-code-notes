// 26. Promise Retry Mechanism

function retryPromise(fn, retries = 3, delay = 1000, backoff = 2) {
  return new Promise((resolve, reject) => {
    function attempt(attemptNumber) {
      fn()
        .then(resolve)
        .catch(error => {
          if (attemptNumber >= retries) {
            reject(error);
          } else {
            const nextDelay = delay * Math.pow(backoff, attemptNumber);
            setTimeout(() => attempt(attemptNumber + 1), nextDelay);
          }
        });
    }
    attempt(0);
  });
}

// Conditional retry: Only retry on network errors
function conditionalRetry(fn, condition, retries = 3) {
  return new Promise((resolve, reject) => {
    function attempt(attemptNumber) {
      fn()
        .then(resolve)
        .catch(error => {
          if (attemptNumber >= retries || !condition(error)) {
            reject(error);
          } else {
            setTimeout(() => attempt(attemptNumber + 1), 1000);
          }
        });
    }
    attempt(0);
  });
}

// Usage
const unreliableTask = () => Math.random() > 0.7 ? Promise.resolve('Success') : Promise.reject(new Error('Fail'));

retryPromise(unreliableTask, 5, 500).then(console.log).catch(console.error);

// Conditional
conditionalRetry(unreliableTask, err => err.message.includes('network'), 3).then(console.log).catch(console.error);

/*
Summary:
- Exponential backoff prevents overwhelming failing services.
- Conditional retries avoid wasting attempts on permanent errors.
*/
