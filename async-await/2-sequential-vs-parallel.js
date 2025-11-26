// 2. Sequential vs Parallel Execution

// Common pitfall: Unnecessarily sequential async operations
const wait = ms => new Promise(res => setTimeout(res, ms));

async function sequentialExecution() {
  console.time('Sequential');
  await wait(1000); // Wait 1s
  await wait(1000); // Wait another 1s (total 2s)
  console.timeEnd('Sequential');
}

async function parallelExecution() {
  console.time('Parallel');
  const p1 = wait(1000);
  const p2 = wait(1000);
  await Promise.all([p1, p2]); // Both start together, wait for both (total 1s)
  console.timeEnd('Parallel');
}

// sequentialExecution();
// parallelExecution();

/*
Edge Cases:
- Forgetting Promise.all leads to unnecessary delays
- Promise.all fails fast - if one rejects, whole thing rejects
- Use Promise.allSettled for partial failures

Interview Tip: When to use sequential vs parallel? Sequential for dependent ops, parallel for independent
Real-world: API calls to multiple services, batch file processing, DB queries
*/
