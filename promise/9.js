


// Case 9: Unhandled Promise Rejection

new Promise((_, reject) => reject("Oops"));
// No .catch()

console.log("After rejection");

/*
⚠️ Note: Unhandled rejections are now treated as runtime errors in modern JS. Always handle .catch() or use try...catch with async/await.
*/