//  implicitly
var person = function(name, age) {

    return {
        name: name,
        age: age,
        printName: function() {
            console.log(this.name);
        },
        father: {
            name: "mr. x",
            printName: function() {
                console.log(this.name)
            }
        }
    }
}

var shakib = person('shakib', 35)
shakib.printName()
shakib.father.printName()