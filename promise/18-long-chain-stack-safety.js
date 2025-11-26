// 18. Long Promise Chains and Stack Safety

// 10,000 chained thens (no stack overflow)
let p = Promise.resolve(0);
for (let i = 0; i < 10000; i++) {
  p = p.then(x => x + 1);
}
p.then((result) => console.log('Final result:', result)); // 10000

// Edge: Recursion with Promises is stack safe, unlike synchronous recursion
function syncRec(n) {
  if (n === 0) return 0;
  return 1 + syncRec(n - 1); // Stack overflow for large n
}
// syncRec(10000); // Uncaught RangeError: Maximum call stack size exceeded

/*
Summary:
- Promise chains are stack safe, even for very long chains.
*/
