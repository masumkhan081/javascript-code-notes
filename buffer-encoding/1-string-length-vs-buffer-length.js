const samples = ["A", "é", "€", "🙂"]

for (const value of samples) {
  console.log({
    value,
    stringLength: value.length,
    utf8Bytes: Buffer.byteLength(value, "utf8"),
    bufferLength: Buffer.from(value).length
  })
}

// Output:
// { value: 'A',  stringLength: 1, utf8Bytes: 1, bufferLength: 1 }
// { value: 'é',  stringLength: 1, utf8Bytes: 2, bufferLength: 2 }
// { value: '€',  stringLength: 1, utf8Bytes: 3, bufferLength: 3 }
// { value: '🙂', stringLength: 2, utf8Bytes: 4, bufferLength: 4 }
//
// JS string.length counts UTF-16 code units, not bytes.
// Emoji '🙂' is a surrogate pair → stringLength 2, but 4 UTF-8 bytes.
// Interview: never use string.length to determine byte size for I/O.
