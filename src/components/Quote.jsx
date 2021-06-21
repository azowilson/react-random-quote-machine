
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Quote.css';


function Quote(props) {
    const [quotes, setQuotes] = useState([]);
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => {
                setQuotes(response.data.quotes.map(quote => quote.quote));
                setAuthors(response.data.quotes.map(quote => quote.author));
            })
            .catch(error => {
                console.log(error);
            })

    }, [])



    return (
        <div className="quote-container">
            <div className="quote-text">
                <i className="fa fa-quote-left"></i>
                <span id="text">{quotes[props.idx]}</span>
            </div>

            <div className="quote-author">
                <span id="author">{authors[props.idx]}</span>
            </div>

        </div>
    )
}

export default Quote;


