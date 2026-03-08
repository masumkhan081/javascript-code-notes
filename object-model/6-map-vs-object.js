const obj = {}
obj[1] = "number"
obj["1"] = "string"

console.log(obj)         // { '1': 'string' }  <- key 1 and "1" are the SAME key

const map = new Map()
map.set(1, "number")
map.set("1", "string")

console.log(map.get(1))    // "number"
console.log(map.get("1"))  // "string"
console.log(map.size)      // 2

// Object keys are always coerced to strings (or Symbols).
// Map keys preserve type: 1 !== "1" as Map keys.
// Map also allows object keys, maintains insertion order reliably,
// and has O(1) .size without needing Object.keys().length.
// Interview: use Map when key types matter or when keys are dynamic/unknown.
// Use plain objects for known string-keyed data (config, records).
