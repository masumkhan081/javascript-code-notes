
const marbles = [] // Our bag
marbles.push(3) // Add marbles to the inner pockets
marbles.push(5)
marbles.push(1)
print(marbles) // [3, 5, 1]

// How many marbles I gots?
// Count will be our group/accumulate of marbles
// The first time it runs it will be already = 3. We like being efficient here,
// so we start with the first pocket already in the count
const marbleCount = marbles.reduce((count, value, index) => {
  print(`Current index: ${index}`) 
  // Output 1 on first pass, then 2. Notice we skip 0 here.

  const totalSoFar = count + value
  
  print(`Adding ${value} marbles to our count: ${count}. Now we gots: ${totalSoFar}`)
  /*
     Fist pass: Adding 5 marbles to our count: 3. Now we gots: 8
     Second pass: Adding 1 marbles to our count: 8. Now we gots: 9
  */

  // Every time we count, we have to return
  return totalSoFar
})

print(`Marble count: ${marbleCount}`)
