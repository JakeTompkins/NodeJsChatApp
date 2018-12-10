import React from 'react';
import socketIOClient from 'socket.io-client'

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      endpoint: "http://localhost:3001"
    }
  }

  send = (message) => {
    const socket = socketIOClient(this.state.endpoint)

    socket.emit('send message', message)
  }
  render()
  {

    const socket = socketIOClient(this.state.endpoint)

    socket.on('receive message', (message) => {
      
      let m = document.createElement("div")
      let mtext = document.createTextNode(message)
      m.appendChild(mtext)

      document.body.appendChild(m)
    })
    return(
      <div>
        <input id="textInput" type="text" name="messageInput" />
        <button onClick={() => {
          let input = document.getElementById("textInput")
          let message = input.value

          this.send(message)
          
          }}>Send</button>
      </div>
    )
  }
}