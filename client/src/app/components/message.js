import React from 'react'
import 'bulma'

export default function Message(props)
{
    return(
        <div className="media">
            <div className="media-left">
                <div className="image is-64x64"><img style={{height: "100%"}} className="is-rounded" src={props.avatarUrl} alt="user avatar"/></div>
            </div>
            <div className="media-content" style={{height: "64px"}}>
                <div className="level" style={{height: "100%"}}>
                    <p className="level-left header">
                        { props.contents }
                    </p>
                </div>
            </div>
        </div>
    )
}