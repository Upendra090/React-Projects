import axios from "axios";
import { useState } from "react";

export default function Main(props) {
  const [word, setWord] = useState("");
  const [antonyms, setAntonyms] = useState();
  const [synonyms, setSynonyms] = useState();
  const changeTextClr = {
    color: props.isTrue ? "#000024ce" : "#c8d7ff",
  };

  const apiKey = "kNg2VXQlZT1vye6Ceo+BBA==WdRqFVu6knNyU9nT";

  const handleFormValue = (e) => {
    setWord(e.target.value);
  };

  const getApiData = () => {
    const options = {
      method: "GET",
      url: "https://api.api-ninjas.com/v1/thesaurus?word=" + word,
      headers: {
        "X-Api-key": apiKey,
      },
      contentType: "application/json",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.synonyms);
        setSynonyms(response.data.synonyms);
        setAntonyms(response.data.antonyms);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let synonymsElements;
  if (synonyms) {
    synonymsElements = synonyms.map((d) => {
      return <li key={d}>{d}</li>;
    });
  } else {
    synonymsElements = "Please search something!";
  }

  let antonymsElements;
  if (synonyms) {
    antonymsElements = antonyms.map((d) => {
      return <li key={d}>{d}</li>;
    });
  } else {
    antonymsElements = "Please search something!";
  }

  return (
    <main className="main">
      <div className="main__formbox">
        <div className="main__formbox--about">
          <p style={changeTextClr}>
            Here in this web app you can find synonyms and antonyms of any word
          </p>
        </div>
        <div className="main__formbox--form">
          <div className="main__formbox--form-inputbox">
            <input
              type="text"
              className="main__formbox--form-inputbox__input"
              placeholder="Enter word here.."
              required
              name="word"
              onChange={handleFormValue}
              value={word}
            />
          </div>
          <button
            onClick={getApiData}
            type="submit"
            className="main__formbox--form-submitbtn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="main__result">
        <div className="main__result--synonyms">
          <h4 className="main__result--heading">Synonyms</h4>
          <ul
            style={changeTextClr}
            className="ul-list main__result--synonyms-words"
          >
            {synonymsElements}
          </ul>
        </div>
        <div className="main__result--antonyms">
          <h4 className="main__result--heading">Antonyms</h4>
          <ul
            style={changeTextClr}
            className="ul-list main__result--antonyms-words"
          >
            {antonymsElements}
          </ul>
        </div>
      </div>
    </main>
  );
}
