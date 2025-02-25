var printName = function() {
    console.log(this.name);
}

var shakib = {
    name: 'shakib',
    age: 35,
}

printName.call(shakib);