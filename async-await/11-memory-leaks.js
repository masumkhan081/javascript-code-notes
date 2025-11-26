// 11. Memory Leaks with Async Operations

// Problem: Forgotten Promises
async function leakyFunction() {
  // This Promise is created but never awaited or handled
  Promise.resolve('Leaked!').then(() => {
    // This callback runs but result is ignored
    console.log('This will still execute');
  });
}

// Solution: Always handle Promises
async function nonLeakyFunction() {
  const result = await Promise.resolve('Handled!');
  console.log(result);
}

// Problem: Accumulating Promises in loops
async function memoryLeakInLoop() {
  const promises = [];
  for (let i = 0; i < 100000; i++) {
    // Each Promise holds memory until resolved
    promises.push(fetch('https://api.example.com/data'));
  }
  // If not awaited properly, all stay in memory
}

// Solution: Process in batches
async function batchedProcessing(items, batchSize = 10) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(item => processItem(item)));
  }
}

/*
Edge Cases:
- Event listeners that trigger async operations
- Timers that aren't cleared
- Unclosed streams or connections

Interview Tip: Always await or .catch() Promises to prevent leaks
Real-world: Long-running servers, event-driven apps, streaming data
*/
