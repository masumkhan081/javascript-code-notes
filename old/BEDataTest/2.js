function vowelIndices(word) {
    let arr = [];
    for (i = 0; i < word.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(word.charAt(i).toLowerCase()) !== -1) {
            arr.push(i + 1) // as indexed from [1..n] 
        }
    }
    return arr
}
///*
console.log(vowelIndices("aeioU"))
console.log(vowelIndices("Mmmm"))
console.log(vowelIndices("Apple"))
console.log(vowelIndices("Super"))
console.log(vowelIndices("Orange"))
console.log(vowelIndices("supercalifragilisticexpialidocious"))
    //*/