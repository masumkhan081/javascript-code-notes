// --- OOP: Encapsulation ---

// Example 1: Encapsulation with Private Fields (ES2022+)
class BankAccount {
    #balance = 0; // private field
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}
const acc = new BankAccount('Alice');
acc.deposit(100);
console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Example 2: Encapsulation with Closures
function SecretHolder(secret) {
    let value = secret;
    return {
        getSecret: function() { return value; },
        setSecret: function(newSecret) { value = newSecret; }
    };
}
const holder = SecretHolder('JS');
console.log(holder.getSecret()); // 'JS'
holder.setSecret('OOP');
console.log(holder.getSecret()); // 'OOP'

// --- Note ---
// Encapsulation hides internal details and exposes only what is necessary.
// In JS, use private fields (#), closures, or naming conventions (e.g., _private) for encapsulation.

// --- Interview Case ---
// What will this log?
class User {
    #password = '123';
    checkPassword(pw) { return pw === this.#password; }
}
const user = new User();
console.log(user.checkPassword('123')); // true
console.log(user.checkPassword('abc')); // false
