const EventEmitter = require("events")

const emitter = new EventEmitter()

try {
  emitter.emit("error", new Error("something bad happened"))
} catch (error) {
  console.log("caught emit error:", error.message)
}
// Without an "error" listener, emitter.emit("error") throws — synchronously.

emitter.on("error", (error) => {
  console.log("handled error event:", error.message)
})

emitter.emit("error", new Error("second failure"))
// With a listener, the error is passed to it — no throw.

// Interview: "error" is a special event in EventEmitter.
// Emitting it with no listener throws an unhandled exception.
// Always attach an "error" listener on streams, net sockets, and custom emitters.
