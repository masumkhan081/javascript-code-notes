const fs = require("fs")
const path = require("path")
const { finished } = require("stream")

const inputPath = path.join(__dirname, "finished-input.txt")
fs.writeFileSync(inputPath, "a\nb\nc\n")

const stream = fs.createReadStream(inputPath)

stream.on("data", (chunk) => {
  console.log("chunk:", chunk.toString().trim())
})

stream.on("end", () => {
  console.log("readable end event")
})

finished(stream, (error) => {
  if (error) {
    console.log("finished with error:", error.message)
    return
  }

  console.log("finished callback")
})

// "end" fires only on readable streams when data is fully consumed.
// "finish" fires on writable streams when all data has been flushed.
// stream.finished() handles ALL stream types and also catches destroy/error.
// Interview: use stream.finished() for reliable cleanup — not just "end".
