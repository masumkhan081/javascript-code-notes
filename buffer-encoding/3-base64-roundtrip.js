const original = "token:বাংলা:🙂"
const encoded = Buffer.from(original, "utf8").toString("base64")
const decoded = Buffer.from(encoded, "base64").toString("utf8")

console.log({ original, encoded, decoded })
console.log("roundtrip matches:", original === decoded)

// base64 encodes arbitrary binary data as ASCII.
// Common uses: HTTP Basic Auth headers, JWT tokens, data URLs, binary in JSON.
// base64 expands size by ~33% — avoid for large payloads.
