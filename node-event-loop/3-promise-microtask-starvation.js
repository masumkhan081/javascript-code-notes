let count = 0

function loop() {
  count += 1

  if (count % 100000 === 0) {
    console.log("microtasks processed:", count)
  }

  Promise.resolve().then(loop)
}

setTimeout(() => {
  console.log("timeout fired")
}, 0)

loop()

// The timeout will never fire — microtask queue is always refilled before
// control returns to the event loop. This is microtask starvation.
// node process will hang indefinitely.
