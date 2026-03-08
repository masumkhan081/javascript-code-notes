async function fakeFetch({ signal, delay }) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve("done")
    }, delay)

    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new Error("aborted"))
    })
  })
}

async function withTimeout(ms, taskFactory) {
  const controller = new AbortController()

  const timeout = setTimeout(() => {
    controller.abort()
  }, ms)

  try {
    return await taskFactory(controller.signal)
  } finally {
    clearTimeout(timeout)
  }
}

async function main() {
  try {
    const result = await withTimeout(100, (signal) =>
      fakeFetch({ signal, delay: 300 })
    )

    console.log(result)
  } catch (error) {
    console.log(error.message)  // "aborted"
  }
}

main()

// AbortController is the standard cancellation primitive in Node.js 16+.
// fetch(), fs.promises, child_process, and http all accept AbortSignal.
// Interview: AbortController vs custom flags — controller is the idiomatic choice.
