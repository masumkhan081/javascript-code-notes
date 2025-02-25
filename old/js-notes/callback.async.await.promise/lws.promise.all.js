const promise1 = Promise.resolve(`promise 1 resolved`)

const prms2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("promise 2 resolved");
    }, 2000)
})

/*
promise1.then(res => console.log(res));
prms2.then(res => console.log(res));
*/

Promise.all([promise1, prms2]).then((res) => {
    console.log(res)
});

/*
// which promise resolve first 
Promise.race([promise1, prms2]).then((res) => {
    console.log(res)
});
*/