// --- Dependency Injection (DI) ---

// Example: Constructor Injection
class Engine {
    start() { return 'Engine started'; }
}
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    drive() {
        return this.engine.start() + ' Car is driving';
    }
}
const engine = new Engine();
const car = new Car(engine);
console.log(car.drive()); // Engine started Car is driving

// Example: Property Injection
class Printer {
    print(msg) { console.log('Printing:', msg); }
}
class Report {
    setPrinter(printer) {
        this.printer = printer;
    }
    generate() {
        this.printer.print('Report generated');
    }
}
const printer = new Printer();
const report = new Report();
report.setPrinter(printer);
report.generate(); // Printing: Report generated

// --- Note ---
// Dependency Injection is a pattern to supply dependencies from outside a class.
// Promotes loose coupling, testability, and flexibility.

// --- Interview Case ---
// What will this log?
class Logger {
    log(msg) { console.log('LOG:', msg); }
}
class Service {
    constructor(logger) { this.logger = logger; }
    doWork() { this.logger.log('Working...'); }
}
const logger2 = new Logger();
const service = new Service(logger2);
service.doWork(); // LOG: Working...
