const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

// array to object conversion
const tally_obj = fruitBasket.reduce((tally, fruit) => {
    //   print(tally[fruit] || 0)
    tally[fruit] = (tally[fruit] || 0) + 1;
    //   print(tally[fruit] || 0)
    return tally;
}, {})

let str = JSON.stringify(tally_obj)
print(str) // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// OR

const tally_obj2 = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
        tally[fruit] = 1;
    } else {
        tally[fruit] = tally[fruit] + 1;
    }
    return tally;
}, {});

str = JSON.stringify(tally_obj2)
print(str) 