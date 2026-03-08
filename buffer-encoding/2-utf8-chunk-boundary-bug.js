const text = "A🙂B"
const buffer = Buffer.from(text, "utf8")

const first = buffer.slice(0, 3)
const second = buffer.slice(3)

console.log("raw first:", first.toString("utf8"))
console.log("raw second:", second.toString("utf8"))
console.log("joined raw:", first.toString("utf8") + second.toString("utf8"))

const { StringDecoder } = require("string_decoder")
const decoder = new StringDecoder("utf8")

let safe = ""
safe += decoder.write(first)
safe += decoder.write(second)
safe += decoder.end()

console.log("decoded safely:", safe)

// The emoji 🙂 is 4 bytes in UTF-8.
// Slicing at byte 3 splits it — toString("utf8") produces the replacement char (U+FFFD).
// StringDecoder buffers incomplete multi-byte sequences across chunk boundaries.
// Interview: always use StringDecoder when decoding UTF-8 stream chunks.
