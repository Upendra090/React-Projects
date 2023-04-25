import RandomSentence from "./component/RandomSentence";
import "./App.css";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark((prevValue) => !prevValue);
  }

  const styles = {
    backgroundImage: isDark ? "var(--darkBgColor)" : "var(--lightBgColor)",
  };

  const stylesText = {
    color: isDark ? "var(--darkTextColor)" : "var(--lightTextColor)",
  };

  const randomSentence = <RandomSentence darkActive={isDark} />;

  return (
    <main className="app" style={styles}>
      <div className="app__detail">
        <h4 style={stylesText}>
          Get random sentences told by anime characters
        </h4>
      </div>
      {randomSentence}
      <div
        data-isdark={isDark}
        className="dark__mode--icon"
        onClick={toggleDarkMode}
      >
        <img src={`/${isDark ? "sun" : "moon"}.png`} alt="Dark Mode Icon" />
      </div>
    </main>
  );
}

export default App;
