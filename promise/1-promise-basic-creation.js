// Case 1: Basic Promise Creation and Handling

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

promise.then((result) => console.log(result)); // Output after 1s: Done

/*
✅ Note: A Promise runs immediately when created, but its .then() handlers execute after it’s resolved.
*/
