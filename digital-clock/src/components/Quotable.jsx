import { useState } from "react";
import axios from "axios";

export default function Quotable() {
  const [quote, setQuote] = useState({
    content: "One life, leave it.",
    author: "Broken Person",
  });

  const [randomQuote, setRandomQuote] = useState({});

  function quotej() {
    axios
      .get("https://api.quotable.io/random")
      .then(function (response) {
        setRandomQuote(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getNewQuote() {
    quotej();
    const content = randomQuote.content;
    const author = randomQuote.author;
    setQuote((prevQuote) => ({
      ...prevQuote,
      content: content,
      author: author,
    }));
  }

  return (
    <div className="quotable">
      <div className="quote">
        <p>"{quote.content}"</p>
        <h4>{quote.author}</h4>
      </div>
      <div className="btn-box">
        <button onClick={getNewQuote}>
          <img src="./svg/refresh.svg" alt="Refresh button" />
        </button>
      </div>
    </div>
  );
}
