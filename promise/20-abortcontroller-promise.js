// 20. AbortController with Promises (Cancel async operations)

function fetchWithAbort(signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(new Error('Aborted before start'));
    const timeout = setTimeout(() => resolve('Fetched!'), 500);
    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(new Error('Aborted!'));
    });
  });
}

const controller = new AbortController();
const { signal } = controller;

fetchWithAbort(signal)
  .then((res) => console.log('Result:', res))
  .catch((err) => console.log('Error:', err.message));

setTimeout(() => controller.abort(), 200); // Abort before fetch completes

/*
Summary:
- Use AbortController to cancel async operations and reject Promises on demand.
*/
