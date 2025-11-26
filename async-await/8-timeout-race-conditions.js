// 8. Timeout and Race Conditions

// Implementing timeout with Promise.race
async function fetchWithTimeout(promise, timeoutMs = 5000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
  );

  return Promise.race([promise, timeoutPromise]);
}

// Usage with simulated slow operation
async function slowOperation() {
  await new Promise(res => setTimeout(res, 3000));
  return 'Slow result';
}

async function demoTimeout() {
  try {
    const result = await fetchWithTimeout(slowOperation(), 2000);
    console.log('Success:', result);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

// demoTimeout();

/*
Edge Cases:
- Promise.race resolves/rejects with first settled Promise
- Timeout doesn't cancel the original operation (memory leak potential)
- Use AbortController for proper cancellation

Interview Tip: Essential for preventing hanging operations in production
Real-world: API calls, file uploads, long-running computations, database queries
*/
