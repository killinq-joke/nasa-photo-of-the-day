import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';
import styled from 'styled-components';

function Main(props) {
    const [fadeIn, setFadeIn] = useState(false);
    const Flex = styled.div`
    display: flex;
    flex-flow: wrap column;
    align-items: center;

    `;
    const Show = styled(Button)`
    margin: 10px;
    padding: 10px 100px;
    font-weight: bold;
    font-size: 20px;
  `;
  const Img = styled.img`
  width: 500px;
`;
  const toggle = () => {
    setFadeIn(!fadeIn);
} 


    console.log(props)
    return(
        <Flex>
            <h1>{props.title}</h1>
            <Img src={props.img}/>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            <h2>{props.explanation}</h2>
            </Fade>  
            <Show color="primary" onClick={toggle}>{fadeIn ? "Read Less" : "Read More"}</Show>
            
        </Flex>
    )
}

export default Main;