
// Case 4: Promise Chaining & Return Value Flow

Promise.resolve(1)
  .then(val => {
    console.log("First:", val); // 1
    return val + 1;
  })
  .then(val => {
    console.log("Second:", val); // 2
    return Promise.resolve(val + 1);
  })
  .then(val => console.log("Third:", val)); // 3

/*
✅ Note: Each .then() handler returns a value, which is passed to the next handler.
📘 Note: I can return either a value or a new Promise from .then(). The next .then() receives its result.
*/
