var bananas = function(s) {
    // Your code here!
    let possible_comb = []
    let len_ban = "banana".length; // could be set manually to 6; as it is static
    let len_s = s.length; // later to be used many times, so stored in a vrble

    //
    for (i = 0; i < "banana".length; i++) {
        possible_comb.push(new Array(len_s).fill(0));
        count = 1;
        for (j = i; j <= len_s - (len_ban - i); j++) {
            if ("banana".charAt(i) == s.charAt(j)) {
                "banana".charAt(i) == s.charAt(j)
                possible_comb[i][j] = count++
            }
        }
    }
    let result_arr = []
    let comb_ind = len_ban - 1; //      node 3.js
    console.log(comb_ind)
        //
    while (comb_ind >= 0) {
        let result_str;

        for (i = 0; i < len_ban; i++) {
            result_str = "";
            if (comb_ind == i) {
                console.log(i + " :if: " + j + " : " + result_str)
                for (j = i; j <= len_s - (len_ban - i); j++) {
                    if (possible_comb[i][j] > 0) {
                        result_str += "banana".charAt(i)
                        possible_comb[i][j] = 0;
                        console.log(i + " :if: " + j + " : " + result_str)
                        break;
                    }
                }
            } else if (possible_comb[i][j] > 0) {
                result_str += "banana".charAt(i)
                console.log(i + "  :eif:  " + j + "  :  " + result_str)
            } else {
                result_str += "-"
                console.log(i + "  :else:  " + j + " : " + result_str)
            }

        }
        comb_ind--;
        console.log(comb_ind)
        result_arr.push(result_str)
    }


    console.log(result_arr)

    return possible_comb
}

bananas("bbananana");