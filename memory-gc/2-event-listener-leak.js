const EventEmitter = require("events")

const emitter = new EventEmitter()

for (let i = 0; i < 15; i += 1) {
  emitter.on("data", () => {
    console.log("listener", i)
  })
}

emitter.emit("data")

// Node.js prints a warning when more than 10 listeners are added to one event.
// This is a leak detector — it does not throw, but it signals likely retention.
// Each listener is a closure; if the emitter is long-lived, listeners accumulate.
//
// Fix options:
// 1. emitter.setMaxListeners(0) — silences warning (not fixing the leak)
// 2. emitter.once() — auto-removes after first emit
// 3. Store the listener reference and call emitter.off(event, listener) when done
