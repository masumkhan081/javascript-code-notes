const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

print(flat) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

