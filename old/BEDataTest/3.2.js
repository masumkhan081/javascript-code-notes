var bananas = function(s) {
    console.log(s)
    recursive(s, "banana", "", []);
}

function recursive(s, ban, rslt_str, rslt_arr) {

    if (ban.length == 2) {
        console.log(rslt_str)
        return;
    }
    /*
    if (rslt_str.length == s_len && ban.length == 0) {
        rslt_arr.push(rslt_str);
    }
    */
    for (i = 0; i < ban.length; i++) {
        for (j = 0; j < s.length; j++) {
            if (ban[i] == s[j]) {
                rslt_str += ban[i];
                console.log("if:  " + s.substr(j + 1, s.length), ban.substr(i + 1, ban.length), rslt_str);
                recursive(s.substr(j + 1, s.length), ban.substr(i + 1, ban.length), rslt_str, rslt_arr)
            } else {
                rslt_str += "-";
                console.log("else:  " + s.substr(j + 1, s.length), ban.substr(i + 1, ban.length), rslt_str);
                recursive(s.substr(j + 1, s.length), ban.substr(i + 1, ban.length), rslt_str, rslt_arr)
            }
        }
    }
}

bananas("bbananana");