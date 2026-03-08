let attempts = 0

async function unstable() {
  attempts += 1

  if (attempts < 3) {
    throw new Error(`failed at attempt ${attempts}`)
  }

  return "success"
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function retry(fn, maxRetries) {
  let lastError

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      if (attempt === maxRetries) {
        break
      }

      const delay = 100 * 2 ** attempt
      console.log("retrying after", delay, "ms")
      await sleep(delay)
    }
  }

  throw lastError
}

retry(unstable, 4)
  .then(console.log)
  .catch((error) => console.log(error.message))

// Exponential backoff: 100ms, 200ms, 400ms, 800ms...
// Prevents hammering a failing service.
// Production enhancements: add jitter (random offset) to prevent thundering herd.
// Interview: always cap retries and include jitter in production retry logic.
