import { count, increment } from "./counter.mjs"

console.log("before increment:", count)  // 0
increment()
console.log("after increment:", count)   // 1

// ESM exports are live bindings — the import reads the current value of the
// exported variable, not a snapshot taken at import time.
// CJS copies the value: const { count } = require("./counter") would freeze at 0.
// Interview: ESM live bindings vs CJS value copy is a common senior question.
// Run: node reader.mjs
