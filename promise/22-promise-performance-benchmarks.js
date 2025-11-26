// 22. Promise Performance Benchmarks

// Benchmarking Promise chains vs async/await
const iterations = 10000;

// Promise chain
function promiseChain() {
  let p = Promise.resolve(0);
  for (let i = 0; i < iterations; i++) {
    p = p.then(x => x + 1);
  }
  return p;
}

// Async/await
async function asyncAwait() {
  let val = 0;
  for (let i = 0; i < iterations; i++) {
    val = await Promise.resolve(val + 1);
  }
  return val;
}

// Benchmark
console.time('Promise Chain');
promiseChain().then(() => console.timeEnd('Promise Chain'));

console.time('Async/Await');
asyncAwait().then(() => console.timeEnd('Async/Await'));

// Memory: Promise chains are more memory-efficient for long sequences
// Speed: Chains are faster due to fewer microtask switches

/*
Summary:
- Promise chains: Better for long sequences (stack-safe, less overhead).
- Async/await: Easier to read but may have more microtask overhead in loops.
*/
