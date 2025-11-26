// 13. Testing Async Code

// Testing library setup (Jest/Mocha example)
const { expect } = require('chai'); // or Jest

// Function to test
async function fetchUser(id) {
  if (id === 1) {
    await new Promise(res => setTimeout(res, 100));
    return { id: 1, name: 'John' };
  }
  throw new Error('User not found');
}

// Test: Success case
async function testFetchUserSuccess() {
  try {
    const user = await fetchUser(1);
    expect(user).to.deep.equal({ id: 1, name: 'John' });
    console.log('✅ Success test passed');
  } catch (error) {
    console.log('❌ Success test failed:', error.message);
  }
}

// Test: Error case
async function testFetchUserError() {
  try {
    await fetchUser(999);
    console.log('❌ Error test failed: should have thrown');
  } catch (error) {
    expect(error.message).to.equal('User not found');
    console.log('✅ Error test passed');
  }
}

// Test: Timeout handling
async function testWithTimeout() {
  const slowFunction = () => new Promise(res => setTimeout(res, 2000));

  try {
    await Promise.race([
      slowFunction(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 100))
    ]);
  } catch (error) {
    expect(error.message).to.equal('Timeout');
    console.log('✅ Timeout test passed');
  }
}

// Run tests
// testFetchUserSuccess();
// testFetchUserError();
// testWithTimeout();

/*
Edge Cases:
- Mock async dependencies ( sinon, jest.mock)
- Test timeouts and race conditions
- Handle unhandled rejections in tests

Interview Tip: Always test both success and error paths
Real-world: Unit tests, integration tests, end-to-end tests
*/
