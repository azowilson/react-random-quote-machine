import './App.css';
import Quote from './components/Quote'
import React from 'react';
import { useState } from 'react';

function App() {
  const [idx, setidx] = useState(0)
  const [theme, setTheme] = useState({
    background: '#16a085',
    color:'#16a085',
    
  })
  const [btnTheme, setBtnTheme] = useState({
    color: '#16a085'
  })
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const nextQuoteHandler = () => {
    setidx(idx + 1);
    let ranColor = Math.floor(Math.random()*colors.length);
    setBtnTheme({
      color: colors[ranColor]
    })
    setTheme({
      background: colors[ranColor],
      color: colors[ranColor]
    })

  }

  return (

    <div id="body" style={theme}>
    <div className="App" id="quote-box" >
    
      
      <Quote idx={idx}/>
      <div className="container">
      <div id="tweet-quote">
        <a href="https://twitter.com/"><i className="fab fa-twitter" style={btnTheme}></i></a>
      </div>
      <button id="new-quote"  className="button" style={btnTheme} onClick={nextQuoteHandler}>New quote</button>
      </div>
    </div>
  </div>

  );
}

export default App;
