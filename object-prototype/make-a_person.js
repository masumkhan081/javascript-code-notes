var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        return firstAndLast.split(" ")[0];
    };
    this.getLastName = function () {
        return firstAndLast.split(" ")[1];
    };
    this.setFullName = function (fullname) {
        firstAndLast = fullname;
    };
    this.setFirstName = function (first) {
        firstAndLast = first  +" " + this.getLastName();
    };
    this.setLastName = function (last) {
        firstAndLast = this.getFirstName() +" " +last;
    };

};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
console.log(bob.getFullName())
 