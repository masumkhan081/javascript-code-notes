// 16. Error Propagation and Catch Bubbling

Promise.resolve()
  .then(() => {
    throw new Error('First error');
  })
  .catch((e) => {
    console.log('Caught:', e.message);
    throw new Error('Second error');
  })
  .catch((e) => {
    console.log('Caught again:', e.message);
    // No rethrow, chain ends here
  });

// Output:
// Caught: First error
// Caught again: Second error

// Edge: If you rethrow in catch, next catch will handle it

/*
Summary:
- .catch() can be chained; errors propagate until handled.
*/
