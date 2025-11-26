// 29. Node.js Promise Integration

const fs = require('fs').promises;
const { promisify } = require('util');
const path = require('path');

// Example 1: fs.promises for file operations
async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

// Example 2: Promisify callback-based functions
const setTimeoutPromise = promisify(setTimeout);
const readFilePromisified = promisify(fs.readFile);

async function demoPromisify() {
  // Promisified setTimeout
  await setTimeoutPromise(1000);
  console.log('Waited 1 second');

  // Promisified fs.readFile
  const data = await readFilePromisified(__filename, 'utf8');
  console.log('File length:', data.length);
}

// Example 3: Database-like operation (simulated)
function simulateDbQuery(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query === 'SELECT * FROM users') {
        resolve([{ id: 1, name: 'John' }]);
      } else {
        reject(new Error('Invalid query'));
      }
    }, 500);
  });
}

async function dbExample() {
  try {
    const users = await simulateDbQuery('SELECT * FROM users');
    console.log('Users:', users);
  } catch (error) {
    console.error('DB Error:', error.message);
  }
}

// Example 4: HTTP requests with axios (if installed)
// const axios = require('axios');
// async function fetchData() {
//   const response = await axios.get('https://api.example.com/data');
//   return response.data;
// }

// Run examples
// readFileAsync(__filename);
// demoPromisify();
// dbExample();

/*
Summary:
- Use fs.promises for modern file operations in Node.js.
- util.promisify converts callback-based APIs to Promises.
- Many Node libraries (DB drivers, HTTP clients) return Promises natively.
- Essential for building scalable Node.js applications.
*/
