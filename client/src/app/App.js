import React from 'react';
import socketIOClient from 'socket.io-client'

import ChatBox from './components/chatBox'
import MessageInput from './components/messageInput'

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)

    this.socket = props.socket
    this.state = {
      messages: []
    }

    const endpoint = "http://localhost:3001"
    const socket = socketIOClient(endpoint)
    socket.on('receive message', (message) => {
      this.receive(message)
    })

    this.socket = socket
    this.send = this.send.bind(this)
    this.receive = this.receive.bind(this)
  }

  send = (message) => {

    message = {
      avatarUrl: "https://images.unsplash.com/photo-1544302319-bc6dcdfaa7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      contents: message
    }

    this.socket.emit('send message', message)
  }

  receive = (message) => {
    this.setState(prevState => {
      let m = prevState.messages
      m.push(message)

      return {messages: m}
    })
  }

  render()
  {
    return(
      <div>
        <div className="columns">
          <ChatBox 
          messages={this.state.messages} />
          </div>
          <MessageInput
          send={this.send} />
      </div>
    )
  }
}