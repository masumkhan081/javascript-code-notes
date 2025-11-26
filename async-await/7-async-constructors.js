// 7. Async Constructor Workaround

// Classes can't have async constructors, but we can use static factory methods
class DatabaseConnection {
  constructor(config) {
    this.config = config;
    this.connected = false;
  }

  // Static async factory method
  static async create(config) {
    const instance = new DatabaseConnection(config);

    // Perform async initialization
    await instance.connect();
    instance.connected = true;

    return instance;
  }

  async connect() {
    // Simulate connection
    await new Promise(res => setTimeout(res, 500));
    console.log('Connected to database');
  }

  async query(sql) {
    if (!this.connected) throw new Error('Not connected');
    return `Result for: ${sql}`;
  }
}

// Usage
async function main() {
  const db = await DatabaseConnection.create({ host: 'localhost' });
  const result = await db.query('SELECT * FROM users');
  console.log(result);
}

// main();

/*
Edge Cases:
- Can't use 'new' with async operations
- Factory method can validate config before creating instance
- Multiple create() calls can share connection pooling

Interview Tip: Common pattern for resources needing async setup (DB, files, network)
Real-world: Database connections, API clients, file handles, WebSocket connections
*/
