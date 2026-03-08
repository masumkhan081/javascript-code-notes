const { Readable, Writable } = require("stream")

class FastSource extends Readable {
  constructor(limit) {
    super({ objectMode: true })
    this.current = 1
    this.limit = limit
  }

  _read() {
    while (this.current <= this.limit) {
      const canContinue = this.push({ value: this.current })
      this.current += 1

      if (!canContinue) {
        return
      }
    }

    this.push(null)
  }
}

class SlowSink extends Writable {
  constructor() {
    super({ objectMode: true, highWaterMark: 5 })
  }

  _write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log("processed", chunk.value)
      callback()
    }, 50)
  }
}

const source = new FastSource(20)
const sink = new SlowSink()

source.on("pause", () => console.log("source paused"))
source.on("resume", () => console.log("source resumed"))
sink.on("drain", () => console.log("sink drained"))

source.pipe(sink)

// pipe() handles backpressure automatically:
// - sink signals pause when its internal buffer is full (hwm: 5)
// - source stops pushing new data
// - when sink drains, it emits "drain" and source resumes
// Interview: without backpressure awareness, producers overwhelm consumers.
