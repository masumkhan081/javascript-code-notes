process.on("unhandledRejection", (reason) => {
  console.log("unhandledRejection:", reason)
})

async function main() {
  Promise.reject("boom")  // no await, no .catch — fires unhandledRejection

  try {
    await Promise.reject("caught boom")
  } catch (error) {
    console.log("caught:", error)
  }
}

main()

// Output:
// caught: caught boom
// unhandledRejection: boom
//
// A rejected Promise with no handler attached before the current microtask queue
// drains will fire the unhandledRejection event.
// In Node.js 15+, unhandledRejection crashes the process by default.
// Production: always add process.on('unhandledRejection') to log and exit cleanly.
