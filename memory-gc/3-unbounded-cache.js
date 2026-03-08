const cache = new Map()

let index = 0

const interval = setInterval(() => {
  const key = `user:${index}`
  const value = {
    payload: "x".repeat(10000),
    createdAt: Date.now()
  }

  cache.set(key, value)
  index += 1

  if (index % 1000 === 0) {
    console.log("cache size:", cache.size)
    console.log("memory:", process.memoryUsage().heapUsed)
  }

  if (index === 5000) {
    clearInterval(interval)
  }
}, 1)

// Map grows unbounded — heapUsed climbs steadily.
// Production fix: LRU cache (limit size), TTL eviction, or WeakRef entries.
// Interview: an unbounded in-process cache is one of the most common Node.js leaks.
