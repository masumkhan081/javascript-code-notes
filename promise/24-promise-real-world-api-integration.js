// 24. Promise Real-World API Integration

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  }

  // Batching requests
  async batchRequests(endpoints) {
    const promises = endpoints.map(ep => this.request(ep));
    return Promise.allSettled(promises);
  }

  // With retry
  async requestWithRetry(endpoint, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        return await this.request(endpoint);
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(res => setTimeout(res, 1000 * (i + 1))); // Exponential backoff
      }
    }
  }
}

// Usage
const client = new ApiClient('https://jsonplaceholder.typicode.com');
client.request('/users/1').then(console.log).catch(console.error);

// Batch
client.batchRequests(['/users/1', '/posts/1']).then(results => {
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') console.log(`Request ${i}:`, result.value);
    else console.error(`Request ${i} failed:`, result.reason);
  });
});

/*
Summary:
- Wrap fetch in promises for error handling and retries.
- Use Promise.allSettled for batching to handle partial failures.
*/
