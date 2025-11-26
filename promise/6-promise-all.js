// 🔁 Case 6: Promise.all() and Rejection Behavior

Promise.all([Promise.resolve("A"), Promise.reject("B"), Promise.resolve("C")])
  .then((values) => console.log(values))
  .catch((err) => console.log("Error:", err));

/*
Expected Output:

Error: B

⚠️ Note: Promise.all() fails fast — if any Promise rejects, the entire chain goes to .catch().

*/
