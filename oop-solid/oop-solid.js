// --- SOLID Principles (OOP Best Practices) ---

// S - Single Responsibility Principle
class Logger {
    log(msg) { console.log(msg); }
}
class User {
    constructor(name, logger) {
        this.name = name;
        this.logger = logger;
    }
    greet() {
        this.logger.log(`Hello, ${this.name}`);
    }
}
const logger = new Logger();
const user = new User('Alice', logger);
user.greet(); // Logs: Hello, Alice

// O - Open/Closed Principle
class Shape {
    area() { throw 'Implement area!'; }
}
class Circle extends Shape {
    constructor(r) { super(); this.r = r; }
    area() { return Math.PI * this.r * this.r; }
}
class Square extends Shape {
    constructor(s) { super(); this.s = s; }
    area() { return this.s * this.s; }
}

// L - Liskov Substitution Principle
function printArea(shape) {
    // Works for any subclass of Shape
    console.log(shape.area());
}
printArea(new Circle(2)); // 12.566...
printArea(new Square(3)); // 9

// I - Interface Segregation Principle (simulated via duck typing)
function canFly(obj) {
    return typeof obj.fly === 'function';
}
const bird = { fly() { return 'flying'; } };
console.log(canFly(bird)); // true

// D - Dependency Inversion Principle
class EmailService {
    send(msg) { console.log('Sent:', msg); }
}
class Notification {
    constructor(service) { this.service = service; }
    notify(msg) { this.service.send(msg); }
}
const email = new EmailService();
const notification = new Notification(email);
notification.notify('Hello!'); // Sent: Hello!

// --- Note ---
// SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
// These principles help you write maintainable, extensible, and robust code.

// --- Interview Case ---
// Which principle is violated if a class handles both data storage and logging? (SRP)
