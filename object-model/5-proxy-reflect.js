const target = {
  firstName: "Masum",
  lastName: "Khan"
}

const proxy = new Proxy(target, {
  get(obj, prop, receiver) {
    console.log("get:", String(prop))
    return Reflect.get(obj, prop, receiver)
  },
  set(obj, prop, value, receiver) {
    console.log("set:", String(prop), value)
    return Reflect.set(obj, prop, value, receiver)
  },
  has(obj, prop) {
    console.log("has:", String(prop))
    return Reflect.has(obj, prop)
  }
})

console.log(proxy.firstName)
proxy.firstName = "M"
console.log("lastName" in proxy)

// Reflect mirrors every Proxy trap as a plain method — use it inside traps
// to delegate to the default behavior without recursion risks.
// Real-world use cases:
// - Vue 3 reactivity system (Proxy-based)
// - validation layers
// - API mocking
// - observable patterns
// Interview: why use Reflect.get instead of obj[prop] inside a get trap?
// Because Reflect.get properly handles the receiver (prototype chain + inheritance).
