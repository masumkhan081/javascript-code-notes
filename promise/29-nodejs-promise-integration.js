// 29. Node.js Promise Integration

const fs = require("fs").promises
const path = require("path")

async function main() {
  try {
    const filePath = path.join(__dirname, "sample.txt")

    await fs.writeFile(filePath, "Hello from Node.js promises")
    console.log("file written")

    const content = await fs.readFile(filePath, "utf8")
    console.log("file content:", content)

    await fs.appendFile(filePath, "\nAppended line")
    console.log("file appended")

    const updated = await fs.readFile(filePath, "utf8")
    console.log("updated content:\n", updated)
  } catch (error) {
    console.log("error:", error.message)
  }
}

main()

// Note: require("fs").promises is the correct idiomatic import.
// Do NOT promisify fs.promises.readFile — it is already a promise-returning function.
// util.promisify is for wrapping legacy callback-style APIs (e.g. older libs, dns.lookup).

