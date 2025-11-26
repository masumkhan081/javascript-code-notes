// 2. Inheritance Pitfalls and Anti-patterns

// Problem: Fragile base class problem
class BaseLogger {
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

class FileLogger extends BaseLogger {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  log(message) {
    // Forgot to call super.log() - breaks base functionality
    require('fs').appendFileSync(this.filename, message + '\n');
  }
}

// Problem: Tight coupling
class Database {
  connect() { return 'Connected to DB'; }
}

class UserService extends Database {
  getUsers() {
    // Directly depends on parent implementation
    this.connect(); // What if connect() changes?
    return ['user1', 'user2'];
  }
}

// Better: Composition
class UserServiceComposed {
  constructor(database) {
    this.database = database;
  }

  getUsers() {
    this.database.connect();
    return ['user1', 'user2'];
  }
}

/*
Edge Cases:
- Method overriding can break Liskov Substitution Principle
- Deep inheritance hierarchies become hard to maintain
- Changes to base class can unexpectedly affect subclasses

Interview Tip: "Composition over inheritance" - but know when inheritance is appropriate
Real-world: Avoid inheritance for utility classes, prefer composition for business logic
*/
