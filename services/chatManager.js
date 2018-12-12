class ChatManager
{
    constructor(io)
    {
        this.io = io
        this.socket = null
    }

    handleSendMessage(message)
    {
        this.io.sockets.emit("receive message", message)
    }

    run()
    {
        // Set socket instance variable, connect/disconnect behavior
        this.io.on("connection", socket => {
            console.log("User connected")

            socket.on("disconnect", () => {
                console.log("User disconnected")
            })

            socket.on("send message", message => {
                this.handleSendMessage(message)
            })
            this.socket = socket
        })
    }

    
}

module.exports = ChatManager