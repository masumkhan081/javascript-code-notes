function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

await sleep(100)

export const config = {
  loaded: true,
  at: Date.now()
}

// Top-level await is only valid in ESM modules (.mjs or "type":"module").
// The module will not finish loading until the await resolves.
// Any module that imports this will also wait — the entire static import graph pauses.
// Interview: top-level await is powerful for one-time async init (DB connect, config fetch).
