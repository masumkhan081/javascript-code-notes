// 12. Cancellation Patterns

// Using AbortController (modern approach)
async function cancellableOperation(signal) {
  // Check if already aborted
  if (signal.aborted) {
    throw new Error('Operation cancelled');
  }

  // Listen for abort
  signal.addEventListener('abort', () => {
    console.log('Operation was cancelled');
  });

  // Simulate work with abort check
  for (let i = 0; i < 10; i++) {
    if (signal.aborted) {
      throw new Error('Operation cancelled during execution');
    }
    await new Promise(res => setTimeout(res, 100));
    console.log(`Step ${i + 1}`);
  }

  return 'Completed';
}

async function demoCancellation() {
  const controller = new AbortController();
  const { signal } = controller;

  // Start operation
  const promise = cancellableOperation(signal);

  // Cancel after 300ms
  setTimeout(() => controller.abort(), 300);

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

// demoCancellation();

/*
Edge Cases:
- AbortController is the standard way (fetch, streams)
- Legacy: Custom cancellation tokens or flags
- Cleanup: Always clear resources on abort

Interview Tip: Essential for user-initiated cancellations (page navigation, search)
Real-world: File uploads, long API calls, background tasks
*/
