import React, { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
   
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {
       
        setQuotes(data.quotes.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <h2>Top 10 Quotes</h2>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default App;
