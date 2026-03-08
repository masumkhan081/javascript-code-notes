function createTask(id, delay) {
  return async () => {
    console.log("start", id)
    await new Promise((resolve) => setTimeout(resolve, delay))
    console.log("end", id)
    return id
  }
}

async function runWithLimit(tasks, limit) {
  const results = []
  let index = 0

  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index
      index += 1
      results[currentIndex] = await tasks[currentIndex]()
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => worker())
  )

  return results
}

async function main() {
  const tasks = [
    createTask("A", 400),
    createTask("B", 300),
    createTask("C", 200),
    createTask("D", 100),
    createTask("E", 250)
  ]

  const results = await runWithLimit(tasks, 2)
  console.log(results)
}

main()

// At most 2 tasks run at the same time — no more than the concurrency limit.
// Use this pattern when calling rate-limited APIs or bounded DB connection pools.
// Interview: Promise.all(all tasks) ignores limits — this pattern enforces them.
