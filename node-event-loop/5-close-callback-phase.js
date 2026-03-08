const net = require("net")

const server = net.createServer((socket) => {
  socket.end("bye")
})

server.listen(0, () => {
  const { port } = server.address()

  const client = net.createConnection({ port }, () => {
    console.log("client connected")
  })

  client.on("data", (chunk) => {
    console.log("client data:", chunk.toString())
  })

  client.on("close", () => {
    console.log("client close")
    server.close(() => {
      console.log("server close")
    })
  })
})

// The "close" event fires in the close callbacks phase of the event loop —
// the final phase before Node checks if there is more work to do.
// Output order:
// client connected
// client data: bye
// client close
// server close
