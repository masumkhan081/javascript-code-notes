// 23. Promise Testing Examples (using Jest-like syntax)

// Assuming Jest is installed: npm install --save-dev jest

// Function to test
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) resolve({ name: 'John' });
    else reject(new Error('User not found'));
  });
}

// Test: Resolve case
test('fetchUser resolves', async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({ name: 'John' });
});

// Test: Reject case
test('fetchUser rejects', async () => {
  await expect(fetchUser(2)).rejects.toThrow('User not found');
});

// Test: Mocking
jest.mock('./api', () => ({
  getUser: jest.fn(() => Promise.resolve({ name: 'Mocked' }))
}));

test('mocked fetchUser', async () => {
  const { getUser } = require('./api');
  const user = await getUser(1);
  expect(user.name).toBe('Mocked');
  expect(getUser).toHaveBeenCalledWith(1);
});

/*
Summary:
- Use async/await in tests for readability.
- Test both resolve and reject paths.
- Mock external dependencies to isolate tests.
*/
