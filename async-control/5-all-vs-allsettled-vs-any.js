const tasks = [
  Promise.resolve("ok-1"),
  Promise.reject(new Error("fail-1")),
  Promise.resolve("ok-2")
]

Promise.all(tasks)
  .then((result) => console.log("all:", result))
  .catch((error) => console.log("all error:", error.message))
  // Rejects as soon as ANY task rejects. Other results are lost.

Promise.allSettled(tasks)
  .then((result) => console.log("allSettled:", result))
  // Always resolves with an array of { status, value/reason } for every task.

Promise.any(tasks)
  .then((result) => console.log("any:", result))
  .catch((error) => console.log("any error:", error.errors))
  // Resolves with the FIRST fulfilled value. Only rejects if ALL tasks reject (AggregateError).

// Summary:
// Promise.all         — all must succeed, fail-fast
// Promise.allSettled  — wait for all, never rejects, inspect each outcome
// Promise.any         — first success wins, tolerates failures
// Promise.race        — first settled wins (success OR failure)
//
// Interview: choose based on whether partial failures are acceptable.
