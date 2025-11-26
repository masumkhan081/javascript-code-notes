// 17. Microtask Queue Edge Cases

console.log('A');
Promise.resolve().then(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
});
setTimeout(() => console.log('D'), 0);
console.log('E');

// Output order:
// A
// E
// B
// C
// D

// Edge: Microtasks (Promise.then) always run before next macrotask (setTimeout)

/*
Summary:
- Microtasks are always executed before macrotasks.
- Nested microtasks are drained before moving to next macrotask.
*/
