// 19. Promise with Custom Schedulers (Advanced)
// Note: Native JS does not allow custom schedulers, but libraries like Bluebird or Zone.js do.
// This is a conceptual example using Bluebird (if installed)

// Uncomment if Bluebird is installed:
// const Bluebird = require('bluebird');
// Bluebird.setScheduler(fn => setTimeout(fn, 10));
// Bluebird.resolve('scheduled!').then(console.log);

// Native Promises always use the microtask queue (no custom scheduler)
Promise.resolve().then(() => console.log('Native microtask'));

/*
Summary:
- Native Promises use the microtask queue; custom schedulers require external libraries.
*/
