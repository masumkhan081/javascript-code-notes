const user = {}

Object.defineProperty(user, "id", {
  value: 101,
  enumerable: false,
  writable: false,
  configurable: false
})

console.log("keys:", Object.keys(user))                          // []  <- not enumerable
console.log("id in user:", "id" in user)                         // true <- still accessible
console.log("descriptor:", Object.getOwnPropertyDescriptor(user, "id"))

user.id = 500
console.log("after write attempt:", user.id)  // 101 (silently ignored, throws in strict mode)

delete user.id
console.log("after delete attempt:", user.id) // 101 (silently ignored)

// Flags:
// enumerable:false  — hidden from for..in, Object.keys(), JSON.stringify()
// writable:false    — value cannot be changed
// configurable:false — descriptor cannot be redefined, property cannot be deleted
// Interview: class fields and const-like object properties use these flags.
