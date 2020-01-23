import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Button, Fade } from 'reactstrap';
import "./App.css";
import TopNav from './TopNav/TopNav';
import Main from './main/main';
import Footer from './Footer/Footer';
import styled from 'styled-components';



function App() {
  const [data, setData] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);
  const Div = styled.div`
  color: white;
  `;
  useEffect(() => {
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=z5k9Cb49GnXtpgRBXqN3YFZCgOBRy6C03kVQgGKs')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    }).catch(err => {
      console.log('The data was not found' ,err)
    })
    
  }, [])

  return (
    <Div className="App">
      <TopNav />
      <Button color="primary" onClick={toggle}>Show</Button>  
      <Fade in={fadeIn} tag="h5" className="mt-3">
                <Main title={data.title}
                      img={data.hdurl}
                      explanation={data.explanation}
                />

      </Fade>  
      <Footer date={data.date} copyright={data.copyright}/>
      
            
      
      
    </Div>
  );
}

export default App;
