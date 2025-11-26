// 5. Inheritance Anti-patterns and Pitfalls

// Anti-pattern 1: Inheritance for code reuse only
class Logger {
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

class UserManager extends Logger {
  constructor() {
    super();
  }

  createUser(userData) {
    this.log('Creating user...');
    // User creation logic
    return { id: 1, ...userData };
  }
}

// Better: Composition
class UserManagerComposed {
  constructor(logger) {
    this.logger = logger;
  }

  createUser(userData) {
    this.logger.log('Creating user...');
    // User creation logic
    return { id: 1, ...userData };
  }
}

// Anti-pattern 2: Deep inheritance hierarchies
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
class GoldenRetriever extends Dog {} // Too deep!

// Anti-pattern 3: Overriding without calling super
class BaseAPI {
  async request(endpoint) {
    // Common setup
    console.log(`Making request to ${endpoint}`);
    return { data: 'response' };
  }
}

class AuthenticatedAPI extends BaseAPI {
  async request(endpoint) {
    // Forgot super.request() - loses base functionality
    // Only does auth
    await this.authenticate();
    return { data: 'auth response' };
  }

  async authenticate() {
    return 'authenticated';
  }
}

/*
Edge Cases:
- Breaking Liskov Substitution: Subclass not substitutable for parent
- Tight coupling: Changes to parent break children
- Constructor chaining: Forgetting super() calls

Interview Tip: Favor composition over inheritance for flexibility
Real-world: Avoid inheritance for utilities, prefer for "is-a" relationships
*/
