// 10. Async Generators

// Generators that yield Promises
async function* asyncGenerator() {
  yield await Promise.resolve('First');
  yield await Promise.resolve('Second');
  yield await Promise.resolve('Third');
}

// Consuming async generator
async function consumeAsyncGenerator() {
  for await (const value of asyncGenerator()) {
    console.log('Received:', value);
  }
}

// Manual iteration
async function manualIteration() {
  const gen = asyncGenerator();
  console.log(await gen.next()); // { value: 'First', done: false }
  console.log(await gen.next()); // { value: 'Second', done: false }
  console.log(await gen.next()); // { value: 'Third', done: false }
  console.log(await gen.next()); // { value: undefined, done: true }
}

// consumeAsyncGenerator();
// manualIteration();

/*
Edge Cases:
- for await...of automatically awaits yielded Promises
- Manual .next() returns Promise<{value, done}>
- Can be infinite generators for streams

Interview Tip: Useful for async iteration without loading everything into memory
Real-world: Processing large datasets, streaming APIs, paginated results
*/
