// 13. Nested Promises and Flattening

function outerPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Promise((resolve2) => {
          setTimeout(() => resolve2('Inner resolved!'), 200);
        })
      );
    }, 200);
  });
}

outerPromise()
  .then((result) => {
    // result is the value from the inner promise, not the inner promise itself
    console.log('Flattened result:', result);
  });
// Output: Flattened result: Inner resolved!

// Edge: .then() always flattens returned Promises (no nested Promise objects in chain)

/*
Summary:
- If a .then() returns a Promise, the next .then() receives its resolved value (flattened).
*/
