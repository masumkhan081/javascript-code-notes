/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let c = "hjjj";
print(c);
var person = {fname: "John", lname: "Doe", age: 25};
var txt = "";
for (let x in person) {
    print(x);
    txt += person[x];
}
print(txt);