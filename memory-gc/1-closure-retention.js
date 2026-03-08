function createLeakyHandler() {
  const huge = new Array(100000).fill("x".repeat(100))

  return function handler() {
    return huge.length
  }
}

const handlers = []

for (let i = 0; i < 1000; i += 1) {
  handlers.push(createLeakyHandler())
}

console.log("handlers:", handlers.length)
console.log("memory:", process.memoryUsage())

// Each handler closes over a 100-element array of 100-char strings (~10 MB each).
// 1000 handlers = closures retain ~10 GB of data even though it is never used.
// Fix: do not close over large objects — pass only what the handler needs,
//      or compute the value eagerly before returning the closure.
