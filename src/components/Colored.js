import React, { Fragment } from 'react'

export default function Colored({ bg, color, word }) {
    const style = {
        backgroundColor: bg,
        color: color
    }
    return (
        <Fragment>
            <div className="jumbotron">
                <h1>Colorful</h1>
            </div>
            <h1 style={style}>The word is: {word}</h1>
        </Fragment>
    )
}

