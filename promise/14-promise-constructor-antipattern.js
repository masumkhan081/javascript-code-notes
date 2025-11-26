// 14. Promise Constructor Anti-patterns

// Anti-pattern: Using async inside new Promise
const bad = new Promise(async (resolve) => {
  // This is unnecessary and can cause unhandled rejections
  const val = await Promise.resolve('bad');
  resolve(val);
});
bad.then(console.log);

// Correct: Just use async function
async function good() {
  return await Promise.resolve('good');
}
good().then(console.log);

// Edge: Never mix async/await with new Promise unless wrapping a callback API

/*
Summary:
- Avoid using async inside new Promise. Use async functions directly.
*/
