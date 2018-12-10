export default class ChatManager
{
    constructor(io)
    {
        

        // Set socket instance variable, connect/disconnect behavior
        io.on("connection", socket => {
            console.log("User connected")

            socket.on("disconnect", () => {
                console.log("User disconnected")
            })

            socket.on("send message", message => {
                this.handleSendMessage(message)
            })

            // Make socket and io accessible to other methods
            this.io = io
            this.socket = socket
        })
    }

    handleSendMessage(message)
    {
        this.io.sockets.emit("receive message", message)
    }

    
}