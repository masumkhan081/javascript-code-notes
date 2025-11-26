// 1. Async/Await Basics - Mixed Sync and Async Flow

// Basic concept: async functions return Promises, await pauses execution until Promise resolves
async function mixedFlow() {
  console.log('1: Start (sync)');

  // await pauses here, but doesn't block the event loop
  const val = await Promise.resolve('2: Resolved (async)');
  console.log(val);

  console.log('3: After await (sync)');
}

mixedFlow();
console.log('4: Outside async (continues immediately)');

// Expected Output:
// 1: Start (sync)
// 4: Outside async (continues immediately)
// 2: Resolved (async)
// 3: After await (sync)

/*
Edge Cases:
- Async functions always return Promises, even without await
- If no await, function runs synchronously but still returns a resolved Promise
- Top-level await (in modules) pauses module loading

Interview Tip: Explain how await desugars to .then() chains
Real-world: Use for API calls, file I/O, DB queries - anywhere async operations are needed
*/
