function convertToRoman(num) {

    var result = '';
    var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var dig = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var x = 0; x < rom.length; x++) {
        //Checking what largest dig[x] value is >= our num, and its position in the array
        while (num >= dig[x]) {
            //rom[x] value correlates to same position as our dig[x] position
            result = result + rom[x];
            console.log(result);
            //Until num = 0, while loop will run again adding another rom. num - dig[x] value
            num = num - dig[x];
            console.log(num);
        }
    }
    return result;
}

console.log(convertToRoman(20));