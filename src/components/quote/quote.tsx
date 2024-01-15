import React, { useEffect, useState } from 'react';
import './styles.scss';
import quotes from '../../data/quotes';

export interface QuoteProps {
  props?: {
    quote: string;
    author: string;
  };
}

export function Quote({
  props = {
    quote: 'A default quote is pretty good',
    author: 'Some Guy',
  },
}: QuoteProps) {
  const [quote, setQuote] = useState(props.quote);
  const [author, setAuthor] = useState(props.author);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    setQuote(newQuote.quote);
    setAuthor(newQuote.author);
  };

  const getATweetLink = () => {
    return (`http://twitter.com/intent/tweet?${quote} - ${author}`);
  }

  useEffect(() => {
    getNewQuote();
  }, []); 

  return (
    <div id="quote-box" className="wrapper">
      <div id="text">"{quote}"</div>
      <div id="author">- {author}</div>
      <div id="new-quote" onClick={getNewQuote}>
        Get a new quote
      </div>
      <a target='_blank'  id="tweet-quote" aria-label="apparently tweeting is still a thing" href={getATweetLink()} rel="noreferrer">Post on X?</a>
    </div>
  );
}
