let count = 0

function loop() {
  count += 1

  if (count % 100000 === 0) {
    console.log("nextTicks processed:", count)
  }

  process.nextTick(loop)
}

setTimeout(() => {
  console.log("timeout fired")
}, 0)

loop()

// process.nextTick starves the event loop even more aggressively than promises.
// nextTick queue is drained completely before any I/O or timers.
// The timeout never fires — process hangs.
// Interview: difference between process.nextTick and Promise microtasks?
// Both starve timers, but nextTick has higher priority than promise microtasks.
