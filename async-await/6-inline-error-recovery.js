// 6. Inline Error Recovery

// Using .catch() inline with await for graceful degradation
async function safeAwait() {
  // If Promise rejects, .catch() returns fallback value
  const result = await Promise.reject('Failed!').catch(err => {
    console.log('Recovered from:', err);
    return 'Fallback value';
  });
  console.log('Result:', result); // Fallback value
}

// Multiple recovery levels
async function multiLevelRecovery() {
  try {
    const data = await fetchDataWithRetry();
    return data;
  } catch (error) {
    console.log('Primary failed, trying backup...');
    try {
      return await fetchBackupData();
    } catch (backupError) {
      console.log('Backup also failed');
      return 'Default data';
    }
  }
}

// safeAwait();

/*
Edge Cases:
- .catch() on await only catches that specific await, not the whole function
- Chaining .catch() after await affects only that Promise
- Complex error recovery can lead to deeply nested code

Interview Tip: Use for optional operations where failure is acceptable
Real-world: Fallback to cache, default values, alternative APIs
*/
