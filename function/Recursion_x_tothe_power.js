/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


print(pow(x, n));

function pow(x, n) {

    if (n == 1) {
        return x;
    }
    return x * pow(x, n - 1);
}