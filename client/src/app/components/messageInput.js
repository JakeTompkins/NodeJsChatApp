import React from 'react'
import 'bulma'

export default class MessageInput extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            inputValue: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e)
    {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    render()
    {
        return(
            <div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.props.send(this.state.inputValue)}>Send</button>
            </div>
        )
    }
}