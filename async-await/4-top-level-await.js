// 4. Top-Level Await

// In ES modules, await can be used at top level (pauses module execution)
console.log('A: Module starts');

// Top-level await pauses here
await Promise.resolve();
console.log('B: After top-level await');

// This won't run until await resolves
console.log('C: Module continues');

/*
Edge Cases:
- Only works in ES modules (.mjs or "type": "module" in package.json)
- Pauses entire module loading - use sparingly
- Can't use in CommonJS or script tags

Interview Tip: Useful for initialization, but can slow app startup
Real-world: Loading config files, establishing DB connections on startup
*/
