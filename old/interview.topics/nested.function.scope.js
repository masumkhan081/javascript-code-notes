let a = 10; // gloal scope

function outer() {
    let b = 11; // found in outer function scope
    /*
    console.log(c) // provide errors as not found in outer scope or up in global
*/
    function inner() {
        let c = 12; // found in inner function scope
        console.log(a, b, c) // keep going up to scopes to find the vars
    }
    inner()
}
outer();