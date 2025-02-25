// implicit binding of this
var obj = {

    name: "masum khan",
    age: 35,
    get_status: function() {
        console.log(this.name + " is reading")
    }
}

obj.get_status();