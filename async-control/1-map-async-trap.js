async function task(value) {
  return value * 2
}

async function main() {
  const values = [1, 2, 3]

  const wrong = values.map(async (value) => task(value))
  console.log("wrong:", wrong)  // Array of Promises, not results!

  const right = await Promise.all(values.map((value) => task(value)))
  console.log("right:", right)  // [2, 4, 6]
}

main()

// Array.map() does not await — it returns an array of unresolved Promises.
// Wrap with Promise.all() to run tasks concurrently and collect results.
// For sequential execution use a for..of loop with await inside.
//
// for await..of is for async iterables (streams, generators), not plain arrays.
// Interview: map+async is the most common async mistake in reviews.
