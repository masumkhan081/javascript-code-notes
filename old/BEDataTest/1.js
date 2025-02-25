remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

function remove(str) {

    // Assumed that str would be string anyway

    last_ind_of = str.lastIndexOf('!')
    len_minus_one = str.length - 1
        //
        //the case where '!'  doesn't exist or not at the end
    if (last_ind_of == -1 || last_ind_of < len_minus_one) {
        return str
    } else { // this else only covers when str is ended with '!'
        //console.log(str + "  () " + str.substr(0, len_minus_one))
        return str.substr(0, len_minus_one);
    }

}