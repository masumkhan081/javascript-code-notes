// 12. Promise.finally() Example

function doTask(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve('Task done');
      else reject('Task failed');
    }, 300);
  });
}

doTask(true)
  .then((res) => console.log('Resolved:', res))
  .catch((err) => console.log('Rejected:', err))
  .finally(() => console.log('Cleanup always runs (success)'));

// Output:
// Resolved: Task done
// Cleanup always runs (success)

doTask(false)
  .then((res) => console.log('Resolved:', res))
  .catch((err) => console.log('Rejected:', err))
  .finally(() => console.log('Cleanup always runs (fail)'));

// Output:
// Rejected: Task failed
// Cleanup always runs (fail)

// Edge: finally does not receive the result or error, just runs after settle
// If finally throws, the chain will reject with that error

/*
Summary:
- finally() runs after resolve or reject, useful for cleanup.
- It does not modify the value unless it throws.
*/
