let glbl_var = 10;
var glbl_var2 = 11;
const glbl_var3 = 12;

function fn() {
    let func_var = 10;
    var func_var2 = 11;
    const func_var3 = 12;
    func_var4 = 13;
    if (func_var3 == 12) {
        var block_var = 10;
        block_var2 = 11;
        let block_var3 = 12;
        console.log("block var inside block: " + block_var)
        console.log("func var inside block: " + func_var)
        console.log("global var inside block: " + glbl_var)
    }
    // gets printed as block_var is declared with var keyword
    console.log("block var outside block: " + block_var)
        // gets printed as it's 
    console.log("block var outside block: " + block_var2)
        // gets error as let has block scope, var doesn't
        // console.log("block var outside block: " + block_var3)

}
fn();
console.log("block var outside function: with no key " + block_var2)
console.log("block var outside function: with var key " + block_var2)
    //console.log("func vars outside func: let " + func_var)
    //console.log("func vars outside func: var " + func_var2)
console.log("func vars outside func: const " + func_var3)
console.log("func vars outside func: no key " + func_var4)
console.log("global vars summed: " + glbl_var + glbl_var + glbl_var)