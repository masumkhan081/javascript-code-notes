// 9. Nested Async Execution Order

async function outer() {
  console.log('Outer Start');

  await inner();

  console.log('Outer End');
}

async function inner() {
  console.log('Inner Start');
  await Promise.resolve();
  console.log('Inner End');
}

outer();
console.log('Global End');

// Expected Output:
// Outer Start
// Inner Start
// Global End
// Inner End
// Outer End

/*
Edge Cases:
- Async calls create new microtasks
- Execution order depends on await placement
- Deep nesting can make flow hard to follow

Interview Tip: Draw execution timeline to explain order
Real-world: Complex workflows, middleware chains, recursive async operations
*/
