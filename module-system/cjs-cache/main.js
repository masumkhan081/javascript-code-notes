const a1 = require("./a")
const a2 = require("./a")

a1.count += 1

console.log("same reference:", a1 === a2)  // true
console.log("a1.count:", a1.count)          // 1
console.log("a2.count:", a2.count)          // 1  <- same object

// require() caches modules after first load.
// "a.js executed" prints only once, not twice.
// Both a1 and a2 point to the same object — mutations are shared.
// Interview: module cache is process-wide. Clear with delete require.cache[key].
