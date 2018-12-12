const express      = require('express')
const session      = require('express-session')
const http         = require('http')
const socketIO     = require('socket.io')
const cors         = require('cors')
const ChatManager  = require('./services/chatManager')
require('./passport')



// Host port
const port = 3001




//Create app
const app = express()




// Configure middlewhere
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(session({secret: "alksdjfew;ifwoefpwefh;aslkdfo", resave: false, saveUninitialized: false}))

// Routes
app.get("/login", (req, res, session) => {
    req.session.name = "Jake"
    res.send(req.session)
})




// Server instance
const server = http.createServer(app)




// Creat socket using the server instance
const io = socketIO(server)
io.origins("http://localhost:3000")




// Create chat manager
const chatManager = new ChatManager(io)
chatManager.run()




// Start the server
server.listen(port, () => console.log(`Listening on port ${port}`))