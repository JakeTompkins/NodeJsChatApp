const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const cors = require('cors')

// Host port
const port = 3001

const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))
// Server instance
const server = http.createServer(app)
// Creat socket using the server instance
const io = socketIO(server)

io.origins("http://localhost:3000")

io.on('connection', socket => {
    console.log("User Connected")

    socket.on('disconnect', () => {
        console.log("User Disconnected")
    })

    socket.on('add message', (message) => {
        io.sockets.emit('add message', message)
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))