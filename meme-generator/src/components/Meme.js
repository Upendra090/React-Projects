import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/2fm6x.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMeme();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: memeUrl,
      };
    });
  }

  function handleChange(event) {
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <main>
      <div className="form-box">
        <div className="form">
          <input
            className="form--input"
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme-box-container">
          <img className="meme-image" src={meme.randomImg} alt="Meme" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
