// 27. Promise Timeout Pattern

function withTimeout(promise, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]);
}

// With cleanup (using AbortController)
function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { signal: controller.signal })
    .then(response => {
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .catch(error => {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') throw new Error('Request timed out');
      throw error;
    });
}

// Usage
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));
withTimeout(slowPromise, 1000).then(console.log).catch(console.error); // Timeout

// With fetch
fetchWithTimeout('https://httpbin.org/delay/1', 500).then(console.log).catch(console.error);

/*
Summary:
- Use Promise.race for simple timeouts.
- AbortController provides cleaner cancellation with cleanup.
*/
