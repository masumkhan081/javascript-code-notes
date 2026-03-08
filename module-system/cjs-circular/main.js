const a = require("./a")
const b = require("./b")

console.log("final a.value:", a.value)
console.log("final b.value:", b.value)

// Circular require output:
// from b, a.value: 1   <- b sees a's PARTIAL exports (only what was set before require("./b"))
// from a, b.value: 4
// final a.value: 3
// final b.value: 4
//
// CJS resolves circular deps by returning the partially-built exports object.
// Anything exported AFTER the require() call is invisible to the other module.
// Interview: circular deps are a design smell — split shared logic into a third module.
