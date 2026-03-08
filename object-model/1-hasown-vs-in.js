const proto = { inherited: true }
const obj = Object.create(proto)

obj.own = true

console.log("own in obj:", "own" in obj)              // true
console.log("inherited in obj:", "inherited" in obj)  // true

console.log("hasOwn own:", Object.hasOwn(obj, "own"))           // true
console.log("hasOwn inherited:", Object.hasOwn(obj, "inherited")) // false

// "in" operator walks the entire prototype chain.
// Object.hasOwn() (ES2022) only checks own properties — safer than hasOwnProperty.
// hasOwnProperty can be overridden on the object itself; Object.hasOwn() cannot.
// Interview: prefer Object.hasOwn() over obj.hasOwnProperty() in new code.
