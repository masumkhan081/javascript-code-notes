// Case 7: Promise.allSettled() to Handle All Outcomes

Promise.allSettled([
  Promise.resolve("✅ Success"),
  Promise.reject("❌ Failure"),
]).then((results) => {
  console.log(results);
});

/*
Expected Output:

[
  { status: 'fulfilled', value: '✅ Success' },
  { status: 'rejected', reason: '❌ Failure' }
]

✅ Note: Use allSettled() when you want to gather all results regardless of failure.
*/
