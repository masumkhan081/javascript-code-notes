// 5. Async in Loops - Pitfalls and Solutions

const wait = ms => new Promise(res => setTimeout(res, ms));

async function badLoop() {
  console.time('badLoop');
  for (let i = 0; i < 3; i++) {
    await wait(500); // Sequential: 1.5s total
    console.log('Bad loop:', i);
  }
  console.timeEnd('badLoop');
}

async function goodLoop() {
  console.time('goodLoop');
  const promises = [];
  for (let i = 0; i < 3; i++) {
    promises.push(wait(500).then(() => console.log('Good loop:', i)));
  }
  await Promise.all(promises); // Parallel: 0.5s total
  console.timeEnd('goodLoop');
}

// For sequential with async/await (rare but valid)
async function sequentialLoop() {
  for (let i = 0; i < 3; i++) {
    await wait(500);
    console.log('Sequential:', i);
  }
}

// badLoop();
// goodLoop();
// sequentialLoop();

/*
Edge Cases:
- forEach with async callbacks doesn't wait (use for...of)
- map() with async functions returns array of Promises
- While loops with await can create infinite waits if condition depends on async result

Interview Tip: Default to parallel unless order matters
Real-world: Processing arrays of files, API calls for multiple users, batch operations
*/
