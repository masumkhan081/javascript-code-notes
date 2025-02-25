let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const arr2 = arr.reduce((acc, value, ind) => {
    // possible to sum up all even/odd numbers
    if (value % 2 == 0) {
        return acc;
    }
    acc+=value
    return acc
},0)

print(arr2)