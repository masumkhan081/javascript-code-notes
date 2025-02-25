class user {

    constructor(name) {
        this.name = name;
    }

    print() {
        return (this.name);
    }
}
let u1 = new user("pussy khan");
let u2 = new user("ass khan");

console.log(u1.print())
    //
u2.func = () => {
    return 'fuckability - yes'
}
console.log(u2.func())