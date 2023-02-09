import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Practice from "./components/Practice";
import { useState } from "react";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const handleClick = () => {
    setIsTrue((prevResult) => !prevResult);
  };

  const changeBGClr = {
    backgroundColor: isTrue ? "grey" : "#000024ce",
  };

  return (
    <div className="App" style={changeBGClr}>
      <Navbar isTrue={isTrue} click={handleClick} />
      <Main isTrue={isTrue} click={handleClick} />
    </div>
  );
}

export default App;
