import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import "./App.css";
import TopNav from './TopNav/TopNav';
import Main from './main/main';
import Footer from './Footer/Footer';

function App() {
  const [data, setData] = useState([]);
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
    <div className="App">
      <TopNav />
      <Main title={data.title}
      img={data.hdurl}
      explanation={data.explanation}
      />

      <Footer date={data.date} copyright={data.copyright}/>
    </div>
  );
}

export default App;
