// Case 5: Catching Errors in Chain

Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong!");
  })
  .catch((err) => {
    console.log("Caught:", err.message);
  });

/*
Expected Output:    

Caught: Something went wrong!

*/
