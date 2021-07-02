import React from 'react'

const Result = (props) => {
    console.log("Resultprops: " + props.values)
    return (
        <div>
            <h1>{props.values}</h1>
        </div>
    )
}

export default Result
