setTimeout(() => console.log("timeout"), 0)

setImmediate(() => console.log("immediate"))

Promise.resolve().then(() => console.log("promise-1"))

process.nextTick(() => console.log("nextTick-1"))

Promise.resolve().then(() => console.log("promise-2"))

process.nextTick(() => {
  console.log("nextTick-2")
  process.nextTick(() => console.log("nextTick-3"))
})

console.log("sync")

// Expected output order:
// sync
// nextTick-1
// nextTick-2
// nextTick-3        <- nextTick scheduled inside nextTick runs before microtasks
// promise-1
// promise-2
// timeout
// immediate
