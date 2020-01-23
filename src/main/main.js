import React from 'react';

function Main(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.explanation}</h2>
            <img src={props.img}/>
        </div>
    )
}

export default Main;