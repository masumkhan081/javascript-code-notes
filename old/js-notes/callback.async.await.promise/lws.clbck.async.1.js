const take_ord = (cus_name, clbck1) => {
    console.log("order been taken for: " + cus_name);
    clbck1(cus_name);
};
const process_ord = (cus_name, clbck2) => {
    console.log("order being processed for: " + cus_name);
    setTimeout(() => {
        console.log("order to be delivered for: " + cus_name);
        clbck2(cus_name);
    }, 3000);
};
const cmplt_ord = (cus_name) => {
    console.log("order completed for: " + cus_name);
};

take_ord("masum khan", (cus_name) => {
    process_ord(cus_name, (cus_name) => {
        cmplt_ord();
    });
});

console.log("the proof of the note");