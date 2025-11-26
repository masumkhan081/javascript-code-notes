
// Case 2: Multiple .then() on the Same Promise

const promise = Promise.resolve("First");

promise.then((res) => console.log("Then 1:", res));
promise.then((res) => console.log("Then 2:", res));

/*
✅ Note: Multiple .then() handlers are executed in the order they are added.
*/

