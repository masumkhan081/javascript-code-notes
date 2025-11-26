// 11. Promise.race() vs Promise.any() Example

// Promise.race: Resolves/rejects as soon as any promise settles (first to finish wins, even if it's a rejection)
const p1 = new Promise((resolve) => setTimeout(() => resolve('A (1s)'), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject('B Error (500ms)'), 500));
const p3 = new Promise((resolve) => setTimeout(() => resolve('C (200ms)'), 200));

Promise.race([p1, p2, p3])
  .then((result) => console.log('race resolved:', result))
  .catch((err) => console.log('race rejected:', err));
// Output: race resolved: C (200ms)

// Promise.any: Resolves as soon as any promise fulfills (ignores rejections unless all reject)
const p4 = new Promise((_, reject) => setTimeout(() => reject('D Error (100ms)'), 100));
const p5 = new Promise((resolve) => setTimeout(() => resolve('E (300ms)'), 300));
const p6 = new Promise((_, reject) => setTimeout(() => reject('F Error (50ms)'), 50));

Promise.any([p4, p5, p6])
  .then((result) => console.log('any resolved:', result))
  .catch((err) => console.log('any rejected:', err));
// Output: any resolved: E (300ms)

// Edge: If all promises reject, Promise.any rejects with AggregateError
Promise.any([p4, p6])
  .then((result) => console.log('any resolved:', result))
  .catch((err) => {
    console.log('any rejected (all failed):', err instanceof AggregateError, err.errors);
  });
// Output: any rejected (all failed): true [ 'D Error (100ms)', 'F Error (50ms)' ]

/*
Summary:
- Promise.race: First settled (fulfilled or rejected) wins.
- Promise.any: First fulfilled wins; only rejects if all reject (AggregateError).
*/
