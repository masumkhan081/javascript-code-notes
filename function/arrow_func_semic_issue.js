/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// ______________________1______________ calling & the response, missing semicolon.

function say_hello() {
    print("I get printed before where i'm called");
}

print("hello !" + say_hello());
say_hello();


//
// ______________________2____________________ 

var fuck = () => {
    print("arrow func called");
};
fuck();