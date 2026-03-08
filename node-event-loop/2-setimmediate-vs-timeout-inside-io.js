const fs = require("fs")

console.log("start")

fs.readFile(__filename, () => {
  console.log("io callback")

  setTimeout(() => console.log("timeout inside io"), 0)
  setImmediate(() => console.log("immediate inside io"))

  Promise.resolve().then(() => console.log("promise inside io"))
  process.nextTick(() => console.log("nextTick inside io"))
})

setTimeout(() => console.log("timeout outside io"), 0)
setImmediate(() => console.log("immediate outside io"))

console.log("end")

// Expected output:
// start
// end
// timeout outside io   (may swap with immediate outside io if outside I/O)
// immediate outside io
// io callback
// nextTick inside io   <- nextTick/microtasks flush after each callback
// promise inside io
// immediate inside io  <- setImmediate wins over setTimeout inside I/O callback
// timeout inside io
