// 14. Async with Event Emitters

const EventEmitter = require('events');

class AsyncEventHandler extends EventEmitter {
  async processEvent(data) {
    console.log('Processing event:', data);

    // Simulate async work
    await new Promise(res => setTimeout(res, 500));

    // Emit completion event
    this.emit('processed', { result: data.toUpperCase() });
  }

  // Method to handle events asynchronously
  async handleEvents() {
    this.on('data', async (data) => {
      try {
        await this.processEvent(data);
      } catch (error) {
        this.emit('error', error);
      }
    });
  }
}

async function demoAsyncEvents() {
  const handler = new AsyncEventHandler();

  // Listen for processed events
  handler.on('processed', (result) => {
    console.log('Event processed:', result);
  });

  handler.on('error', (error) => {
    console.log('Event error:', error.message);
  });

  // Start handling
  await handler.handleEvents();

  // Emit events
  handler.emit('data', 'hello');
  handler.emit('data', 'world');

  // Wait a bit for processing
  await new Promise(res => setTimeout(res, 1500));
}

// demoAsyncEvents();

/*
Edge Cases:
- Multiple async listeners can cause race conditions
- Error in one listener affects others
- Memory leaks if listeners aren't cleaned up

Interview Tip: Use for decoupling async operations
Real-world: WebSocket handling, file watching, database change streams
*/
