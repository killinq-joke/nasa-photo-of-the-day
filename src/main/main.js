import React from 'react';

function Main(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
            <img src={props.img}/>
        </div>
    )
}

export default Main;