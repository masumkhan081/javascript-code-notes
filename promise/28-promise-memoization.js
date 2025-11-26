// 28. Promise Memoization

function memoizePromise(fn, getKey = (...args) => JSON.stringify(args)) {
  const cache = new Map();

  return (...args) => {
    const key = getKey(...args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const promise = fn(...args).catch(error => {
      // Remove failed promises from cache
      cache.delete(key);
      throw error;
    });

    cache.set(key, promise);
    return promise;
  };
}

// Example: Memoized API call
const fetchUser = memoizePromise((id) => {
  console.log(`Fetching user ${id}`);
  return new Promise(resolve => setTimeout(() => resolve({ id, name: `User ${id}` }), 500));
});

// Concurrent calls for same key return the same promise
fetchUser(1).then(console.log);
fetchUser(1).then(console.log); // Cached, no second fetch

// Cache invalidation (manual)
setTimeout(() => {
  // To invalidate: fetchUser.cache.delete('1'); // If exposed
}, 1000);

/*
Summary:
- Prevents redundant async calls for the same inputs.
- Handle concurrency and cache invalidation carefully.
*/
