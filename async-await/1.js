// 📘 Advanced & Tricky Async/Await and Promise Examples

// Case 1: async/await with mixed sync and async flow
async function mixedFlow() {
    console.log('1: Start');
  
    const val = await Promise.resolve('2: Resolved');
    console.log(val);
  
    console.log('3: After await');
  }
  
  mixedFlow();
  console.log('4: Outside async');
  
  // Expected Output:
  // 1: Start
  // 4: Outside async
  // 2: Resolved
  // 3: After await
  
  // 🔍 Note: Await pauses only inside the async function. Outside continues immediately.
  
  
  // Case 2: Sequential vs Parallel async operations
  async function sequentialVsParallel() {
    const wait = ms => new Promise(res => setTimeout(res, ms));
  
    console.time('Sequential');
    await wait(1000);
    await wait(1000);
    console.timeEnd('Sequential'); // ~2s
  
    console.time('Parallel');
    const p1 = wait(1000);
    const p2 = wait(1000);
    await Promise.all([p1, p2]);
    console.timeEnd('Parallel'); // ~1s
  }
  
  // sequentialVsParallel();
  
  
  // Case 3: async function returning rejected Promise
  async function rejectionExample() {
    throw new Error('💥 Boom!');
  }
  
  rejectionExample()
    .then(() => console.log('Success'))
    .catch(err => console.log('Caught:', err.message));
  
  // Expected: Caught: 💥 Boom!
  
  
  // Case 4: Top-level await + IIFE
  (async () => {
    console.log('A');
    await Promise.resolve();
    console.log('B');
  })();
  
  console.log('C');
  
  // Output:
  // A
  // C
  // B
  
  
  // Case 5: await in loops — pitfall
  const wait = ms => new Promise(res => setTimeout(res, ms));
  
  async function badLoop() {
    console.time('badLoop');
    for (let i = 0; i < 3; i++) {
      await wait(500); // runs one after another
      console.log('Bad loop:', i);
    }
    console.timeEnd('badLoop');
  }
  
  async function goodLoop() {
    console.time('goodLoop');
    await Promise.all([
      wait(500).then(() => console.log('Good loop: 0')),
      wait(500).then(() => console.log('Good loop: 1')),
      wait(500).then(() => console.log('Good loop: 2')),
    ]);
    console.timeEnd('goodLoop');
  }
  
  // badLoop();
  // goodLoop();
  
  
  // Case 6: await with .catch inline
  async function safeAwait() {
    const result = await Promise.reject('Failed!').catch(err => 'Recovered');
    console.log(result); // Recovered
  }
  
  // safeAwait();
  
  
  // Case 7: Async constructor workaround (not allowed directly)
  class Something {
    static async create() {
      const data = await Promise.resolve('data loaded');
      return new Something(data);
    }
  
    constructor(data) {
      this.data = data;
    }
  }
  
  // Usage:
  // const instance = await Something.create();
  
  
  // Case 8: async/await with race condition
  async function fetchWithTimeout(fetchPromise, timeout = 1000) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout!')), timeout)
    );
  
    return Promise.race([fetchPromise, timeoutPromise]);
  }
  
  // Usage Example:
  // await fetchWithTimeout(fetch('https://api.example.com'), 5000);
  
  
  // Case 9: Nested async calls with confusing order
  async function outer() {
    console.log('Outer Start');
  
    await inner();
  
    console.log('Outer End');
  }
  
  async function inner() {
    console.log('Inner Start');
    await Promise.resolve();
    console.log('Inner End');
  }
  
  outer();
  console.log('Global End');
  
  // Expected:
  // Outer Start
  // Inner Start
  // Global End
  // Inner End
  // Outer End
  