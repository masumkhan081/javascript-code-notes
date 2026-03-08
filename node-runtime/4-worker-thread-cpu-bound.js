const { Worker, isMainThread, parentPort, workerData } = require("worker_threads")

function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

if (isMainThread) {
  console.log("main thread start")

  const worker = new Worker(__filename, {
    workerData: 40
  })

  worker.on("message", (result) => {
    console.log("worker result:", result)
  })

  worker.on("exit", () => {
    console.log("worker exit")
  })

  console.log("main thread not blocked here")
} else {
  const result = fib(workerData)
  parentPort.postMessage(result)
}

// Worker threads run in a separate V8 isolate with their own event loop.
// CPU-bound work (fib, image processing, crypto) blocks the main thread — offload it.
// Workers share memory via SharedArrayBuffer + Atomics, but not JS objects.
// Interview: child_process.fork() vs worker_threads?
// — fork() spawns a full Node process (more overhead, true isolation)
// — worker_threads share memory and are faster for CPU-bound tasks within one process
