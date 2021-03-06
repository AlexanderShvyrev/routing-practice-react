import React from 'react'

export default function Number({ input }) {
    let banana = true;
    if (isNaN(input)) {
        banana = false;
    }
    return (
        <div className="jumbotron">
            {
                banana ?
                    <h1>The number is: {input}</h1>
                    :
                    <h1>The word is: {input}</h1>

            }
        </div>
    )
}
