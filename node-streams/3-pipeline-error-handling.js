const fs = require("fs")
const path = require("path")
const { Transform, pipeline } = require("stream")

const inputPath = path.join(__dirname, "pipeline-input.txt")
const outputPath = path.join(__dirname, "pipeline-output.txt")

fs.writeFileSync(inputPath, "hello\nworld\nboom\nagain\n")

const explosiveTransform = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString()

    if (text.includes("boom")) {
      callback(new Error("transform failed on forbidden content"))
      return
    }

    callback(null, text.toUpperCase())
  }
})

pipeline(
  fs.createReadStream(inputPath),
  explosiveTransform,
  fs.createWriteStream(outputPath),
  (error) => {
    if (error) {
      console.log("pipeline failed:", error.message)
      return
    }

    console.log("pipeline succeeded")
  }
)

// pipeline() automatically destroys all streams on error.
// Using .pipe() chains manually does NOT do this — streams can leak.
// Always prefer pipeline() over manual .pipe() in production.
