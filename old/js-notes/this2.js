// implicit binding of this


var printPlayerNameFunction = function(obj) {

    obj.printPlayerName = function() {
        console.log(this.name);
    }
}

var shakib = {
    name: 'shakib al hasan',
    age: 35
}

var tamim = {
    name: 'Tamim',
    age: 36
}

printPlayerNameFunction(shakib)
printPlayerNameFunction(tamim)
    //
shakib.printPlayerName();
tamim.printPlayerName();