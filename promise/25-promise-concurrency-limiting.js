// 25. Promise Concurrency Limiting

function promiseAllLimited(promises, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let index = 0;

    function next() {
      if (index >= promises.length) {
        if (running === 0) resolve(results);
        return;
      }

      while (running < limit && index < promises.length) {
        const currentIndex = index++;
        running++;

        promises[currentIndex]
          .then(result => {
            results[currentIndex] = result;
          })
          .catch(reject)
          .finally(() => {
            running--;
            next();
          });
      }
    }

    next();
  });
}

// Usage: Limit to 2 concurrent promises
const tasks = Array.from({ length: 10 }, (_, i) =>
  new Promise(resolve => setTimeout(() => resolve(`Task ${i}`), Math.random() * 1000))
);

promiseAllLimited(tasks, 2).then(results => console.log('All done:', results));

/*
Summary:
- Limits concurrent executions to prevent resource overload (e.g., API rate limits).
- Useful for high-volume async tasks.
*/
