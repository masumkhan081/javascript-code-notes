
function rot13(str) {
    const alph = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let result = '';
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        // console.log(str.charAt(i).charCodeAt())
        if (str.charAt(i).charCodeAt() >= 78 && str.charAt(i).charCodeAt() <= 91) {
            result += String.fromCharCode(str.charAt(i).charCodeAt() - 13);
        }
        else if (str.charAt(i).charCodeAt() >= 65 && str.charAt(i).charCodeAt() < 78) {
            result += String.fromCharCode(91 - 13 + str.charAt(i).charCodeAt() - 65);
        }
        else {
            result += str.charAt(i);
        }
    }
    return result;
}
console.log(rot13("SERR PBQR PNZC"))
console.log('A'.charCodeAt());
//console.log(String.fromCharCode('e'.charCodeAt() - 13))