const flg = "multiple";
//

const sto = setTimeout(() => {
    console.log("fuck me once")
}, 2000);
//
// as flg='multiple', i don't want to print 'fuck me once'
// anymore as i intended earlier. so cleared it.
// setTimeout() is executed only once.

if (flg == 'multiple') {
    clearTimeout(sto)
}