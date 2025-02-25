/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookName) {
    let arr = Array.from(bookList);
    print(arr);
    arr.push(bookName);
    return arr;
}
function remove(bookName) {

    let arr = bookList.slice();
    var book_index = arr.indexOf(bookName);
    if (book_index >= 0) {
        arr.splice(book_index, 1);
        return arr;
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
print(bookList);