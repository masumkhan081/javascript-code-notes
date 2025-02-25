const flg = "multiple";
//

const sto = setInterval(() => {
  console.log("fuck me once");
}, 1000);
//
// as flg='multiple', i don't want to print 'fuck me once'
// anymore as i intended earlier. so cleared it.
// setInterval() is executed repeatadly.

if (flg == "multiple") {
  clearTimeout(sto);
}
