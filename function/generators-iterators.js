// --- Generators and Iterators ---

// Generator function
function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = genNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Iterator example
const iterable = {
    [Symbol.iterator]: function* () {
        yield 'a';
        yield 'b';
    }
};
for (const val of iterable) {
    console.log(val); // 'a', then 'b'
}

// --- Note ---
// Generators are functions that can pause and resume, returning multiple values over time.
// Iterators are objects implementing the .next() method, used in for...of loops.

// --- Interview Case ---
// What will this log?
function* fib(n) {
    let a = 0, b = 1;
    while (n-- > 0) {
        yield a;
        [a, b] = [b, a + b];
    }
}
console.log([...fib(5)]); // [0, 1, 1, 2, 3]
