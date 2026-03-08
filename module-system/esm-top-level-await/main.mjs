import { config } from "./config.mjs"

console.log(config)

// main.mjs will not execute until config.mjs has resolved its top-level await.
// Output: { loaded: true, at: <timestamp> }
// Run: node main.mjs
