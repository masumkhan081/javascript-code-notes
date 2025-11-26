let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); // filles all with 'kiwi'
console.log(fruits)
    //
fruits = ["Banana", "Orange", "Apple", "Mango", "jackfruit", "no-fuck"];
fruits.fill("Kiwi", 2, 4); // start at 2, till 4 (before 4)
console.log(fruits)
    //
fruits = ["Banana", "Orange", "Apple", "Mango", "jackfruit", "no-fuck"];
fruits.fill("Kiwi", 3, 4); // start at 3, till 4 (before 4)
console.log(fruits)