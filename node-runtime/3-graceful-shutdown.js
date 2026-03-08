const http = require("http")

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end("ok")
  }, 2000)
})

server.listen(3000, () => {
  console.log("server listening on 3000")
})

function shutdown(signal) {
  console.log(`received ${signal}`)

  server.close(() => {
    console.log("server closed")
    process.exit(0)
  })

  setTimeout(() => {
    console.log("force exit")
    process.exit(1)
  }, 5000)
}

process.on("SIGINT", () => shutdown("SIGINT"))
process.on("SIGTERM", () => shutdown("SIGTERM"))

// server.close() stops accepting new connections but waits for in-flight requests.
// The 5-second force exit ensures the process does not hang if requests stall.
// Production: also close DB pools, flush log buffers, and deregister from service registry.
// Interview: what is graceful shutdown and why does it matter?
// — Prevents mid-request data corruption, allows load balancers to drain cleanly.
