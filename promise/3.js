// Case 3: Execution Order — Microtasks vs Macrotasks

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise then");
});

console.log("End");

/*
✅ Note: Microtasks (like Promise) are executed before macrotasks (like setTimeout).
*/

