let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log("admin.fullName:  " + admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log("admin.fullName:  " + admin.fullName); // Alice Cooper, state of admin modified
console.log("user.fullName:  " + user.fullName); // John Smith, state of user protected

user.fullName = "Alice Cooper-2"; // now state of user being changed
console.log("admin.fullName:  " + admin.fullName);
console.log("user.fullName:  " + user.fullName);