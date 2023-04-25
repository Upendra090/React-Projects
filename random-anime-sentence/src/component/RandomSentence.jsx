import { useState } from "react";

export default function RandomSentence(props) {
  const propsValue = props.darkActive;
  const [sentence, setSentence] = useState({
    sentence:
      "Love is a bitter sweet taste of life, which many humans many weaknesses and sometimes their strongest weapon.",
    character: "Mato Kuroi",
    anime: "Black Rock Shooter",
  });
  const styles = {
    color: propsValue ? "var(--darkTextColor)" : "var(--lightTextColor)",
  };

  const stylesBtn = {
    backgroundColor: propsValue ? "#ffffff4a" : "#000000",
  };

  async function getSentence() {
    const response = await fetch("https://some-random-api.ml/animu/quote");
    const jsonData = await response.json();
    setSentence(jsonData);
  }

  return (
    <main className="random__box">
      <div className="random__box--sentence">
        <p style={styles}>{sentence.sentence}</p>
        <div className="details">
          <p style={styles}>Character : {sentence.character}</p>
          <p style={styles}>Anime : {sentence.anime}</p>
        </div>
      </div>
      <div className="random__box--btn">
        <button onClick={getSentence} style={stylesBtn} className="generate">
          Generate
        </button>
      </div>
    </main>
  );
}
