// --- Named vs Anonymous Functions ---

// Named Function
function namedFunc() {
    return 'I have a name!';
}
console.log(namedFunc());

// Anonymous Function (assigned to a variable)
const anonFunc = function() {
    return 'I am anonymous!';
};
console.log(anonFunc());

// Anonymous Function as callback
setTimeout(function() {
    console.log('Anonymous timeout!');
}, 100);

// --- Note ---
// Named functions are easier to debug (name shows in stack traces).
// Anonymous functions are useful for short-lived or inline use.

// --- Interview Case ---
// What will this log?
const arr = [function() { return 1; }, function() { return 2; }];
console.log(arr[0].name); // '' (empty string, anonymous)
console.log(namedFunc.name); // 'namedFunc'
