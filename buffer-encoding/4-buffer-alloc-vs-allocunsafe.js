const safe = Buffer.alloc(16)
const unsafe = Buffer.allocUnsafe(16)

console.log("alloc:", safe)
console.log("allocUnsafe:", unsafe)

unsafe.fill(0)
console.log("allocUnsafe after fill:", unsafe)

// Buffer.alloc(n)       — allocates n bytes, zero-fills them. Safe, slightly slower.
// Buffer.allocUnsafe(n) — allocates n bytes from uninitialized memory. Faster,
//                         but may contain old process memory (sensitive data).
// Interview: never expose allocUnsafe buffer content to users or logs before filling.
// Real-world risk: reading uninitialized memory can leak heap content across requests.
