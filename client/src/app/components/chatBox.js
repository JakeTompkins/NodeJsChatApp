import React from 'react'
import Message from './message'
import 'bulma'

export default class ChatBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props = props
    }

    render()
    {
        return(
            <div className="column">
                {        
                    this.props.messages.map((message, index) => {
                            return(
                                <Message 
                                {...message}
                                key={index} />
                            )
                        })
                }
            </div>
        )
    }
}