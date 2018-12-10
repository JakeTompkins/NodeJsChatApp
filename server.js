const express  = require('express')
const http     = require('http')
const socketIO = require('socket.io')
const cors     = require('cors')

import ChatManager from './services/chatManager'

// Host port
const port = 3001




// TODO: Figure out if CORS is actually necessary
const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))




// Server instance
const server = http.createServer(app)




// Creat socket using the server instance
const io = socketIO(server)
io.origins("http://localhost:3000")




// Create chat manager
chatManager = ChatManager(io)




// Start the server
server.listen(port, () => console.log(`Listening on port ${port}`))