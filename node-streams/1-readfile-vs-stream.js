const fs = require("fs")
const path = require("path")

const source = path.join(__dirname, "large-demo.txt")

function createBigFile() {
  if (fs.existsSync(source)) return

  const fd = fs.openSync(source, "w")

  for (let i = 0; i < 200000; i += 1) {
    fs.writeSync(fd, `line-${i} ${"x".repeat(100)}\n`)
  }

  fs.closeSync(fd)
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

function logMemory(label) {
  const { rss, heapUsed } = process.memoryUsage()
  console.log(label, {
    rss: formatMb(rss),
    heapUsed: formatMb(heapUsed)
  })
}

createBigFile()

logMemory("before readFile")

fs.readFile(source, "utf8", (error, data) => {
  if (error) throw error

  logMemory("after readFile")
  console.log("chars:", data.length)

  logMemory("before stream")

  let total = 0
  const stream = fs.createReadStream(source, { encoding: "utf8" })

  stream.on("data", (chunk) => {
    total += chunk.length
  })

  stream.on("end", () => {
    logMemory("after stream")
    console.log("stream chars:", total)
  })

  stream.on("error", (streamError) => {
    throw streamError
  })
})

// readFile loads the entire file into memory at once — heapUsed spikes.
// createReadStream reads in chunks — heapUsed stays low regardless of file size.
// Interview: always use streams for large files in Node.js.
