// --- Method vs Function ---

// Function: Standalone, not attached to an object
function standalone() {
    return 'I am a function';
}
console.log(standalone());

// Method: Function attached to an object
const obj = {
    method: function() {
        return 'I am a method';
    }
};
console.log(obj.method());

// --- Note ---
// A function becomes a method when it is a property of an object.
// Methods can use 'this' to refer to the object.

// --- Interview Case ---
// What will this log?
const dog = {
    sound: 'woof',
    speak() {
        return this.sound;
    }
};
const speak = dog.speak;
console.log(speak()); // undefined (or window.sound in browser)
console.log(dog.speak()); // 'woof'
