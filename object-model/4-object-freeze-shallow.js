const settings = {
  theme: "dark",
  nested: {
    pageSize: 20
  }
}

Object.freeze(settings)

settings.theme = "light"
settings.nested.pageSize = 50

console.log(settings)
// { theme: 'dark', nested: { pageSize: 50 } }

// Object.freeze() is SHALLOW.
// Top-level properties are frozen — settings.theme write is silently ignored.
// Nested objects are not frozen — settings.nested.pageSize CAN be changed.
//
// Deep freeze utility:
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const value = obj[name]
    if (value && typeof value === "object") {
      deepFreeze(value)
    }
  })
  return Object.freeze(obj)
}

const config = deepFreeze({ db: { port: 5432 } })
config.db.port = 9999
console.log(config.db.port) // 5432 — now truly frozen
