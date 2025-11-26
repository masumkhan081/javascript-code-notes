/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addTogether() {
  let arr = Array.from(arguments);
  // console.log(typeof(arr[0])+"   "+ typeof(arr[1]))
  if (arr.some((elmnt) => typeof elmnt !== "number")) {
    return undefined;
  } else if (arr.length == 1) {
    return (sec_arg) => {
      if (typeof sec_arg !== "number") {
        return undefined;
      } else {
        return arr[0] + sec_arg;
      }
    };
  }
  if (arr.length == 2) {
    return arr[0] + arr[1];
  }
}

console.log(addTogether(2)([3]));
