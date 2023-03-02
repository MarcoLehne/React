import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef, updateState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faQuoteLeft, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { randomIntFromMax, random_rgba} from './Utils.js'
import Constants from './Constants.js'

function App() {

  const [quote, setQuote] = useState(Constants.QUOTES.at(randomIntFromMax(Constants.QUOTES.length - 1)))
  const [rgb, setRgb] = useState(random_rgba)
  const [opac, setOpac] = useState(1)
  const [tweetRef, setTweetRef] = useState('https://twitter.com/intent/tweet?text='.concat(quote.quote.replace(' ','%20')).concat('%2D' + quote.author.replace(' ','%20')))

  function handleClick(){
    
    setOpac(0)

    setTimeout(() =>
      { setQuote(Constants.QUOTES.at(randomIntFromMax(Constants.QUOTES.length  - 1)))
        setRgb(random_rgba)
        setOpac(1)
        setTweetRef('https://twitter.com/intent/tweet?text='.concat(quote.join('%20')))}, 800)
    
  }
  return (
    
    <div className='App' style={{backgroundColor:rgb, transition: "background-color 1s"}}>
        <div className='QuoteAndDesigner'>
          <div id='quote-box'>
            <p id='text' style={{color:rgb ,opacity:opac, transition: "color 1s, opacity 0.8s"}}>
              <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:30}}/>
              {" "}{quote.quote}
            </p>
            <h2 id='author' style={{color:rgb ,opacity:opac, transition: "color 1s, opacity 0.8s"}}>
              - {quote.author}
            </h2>
            <div className='Buttons'>
              <a id="tweet-code" href={tweetRef} className="button" style={{backgroundColor:rgb, transition: "background-color 1s"}}>
                <FontAwesomeIcon id="tweet-icon" icon={faMessage}/>
              </a>
              <button id='new-quote' onClick={handleClick}  style={{backgroundColor:rgb, transition: "background-color 1s"}}>
                New Quote
              </button>
            </div>
          </div>
          <h1 id="app-designer">by Marco Lehne</h1>
        </div>
    </div>
  );
}

export default App;
