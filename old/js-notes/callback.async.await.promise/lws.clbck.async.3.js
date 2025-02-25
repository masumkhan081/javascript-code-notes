function take_ord(cus_name, clbck1) {
    console.log("order been taken for: " + cus_name);
    clbck1(cus_name, cmplt_ord);
}

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
const cus_name = "masumkhan";
take_ord(cus_name,
    process_ord
);

console.log("the proof of the note");