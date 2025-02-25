let fruits = ["Banana", "Orange", "Apple", "Mango", "water", "fuck", "ass"];

/* 
start copying from 3rd index and puting at index:2,len of arr 
doesn't change
copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array
 */
fruits.copyWithin(2, 3);
console.log(fruits)
    //
fruits = ["Banana", "Orange", "Apple", "Mango", "water"];
fruits.copyWithin(0, 3); //copy from 3rd ind & puting at ind:2,
console.log(fruits)
    //
fruits = ["Banana", "Orange", "Apple", "Mango", "water"];
fruits.copyWithin(2, 0);
console.log(fruits)
    //
    /* pull from 0, placing at 2, how much? = 1 */
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "whatever"];
fruits.copyWithin(2, 0, 1);
console.log(fruits)

/* pull from 0, placing at 2, how much? = 2 */
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "whatever"];
fruits.copyWithin(2, 0, 2);
console.log(fruits)