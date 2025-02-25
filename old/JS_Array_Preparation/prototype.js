/* Creating a method that transforms array values into upper case
now Using the method on any array is possible
prototype allows me to add new properties and methods to arrays.
prototype is a property available with all JavaScript objects.
*/
Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    return this;
};
Array.prototype.Ucase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }

};
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0].toUpperCase()); // converts the whole arr element
//
console.log(fruits.myUcase());
console.log(fruits.Ucase());
fruits.Ucase()
console.log(fruits);
//
//
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
console.log(Person.eyeColor + "  " + Person.nationality) // undefined
    //
let pers = new Person("fuck", "khan", 15, "blue")
console.log(pers.eyeColor + "  " + pers.nationality)