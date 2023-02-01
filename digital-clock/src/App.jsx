import { useEffect, useState } from "react";
import "./App.css";
import Bottom from "./components/Bottom";
import Clock from "./components/Clock";
import Quotable from "./components/Quotable";

function App() {
  const d = new Date();
  const h = d.getHours();
  const linearGradient =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.3) 100%)";
  const styles = {
    backgroundImage: `
        ${linearGradient}, url("/images/${
      h >= 22
        ? "night"
        : h >= 17
        ? "evening"
        : h >= 12
        ? "afternoon"
        : h >= 9
        ? "morning"
        : "earlyMorning"
    }.webp")
    `,
  };

  const [ipAddress, setIpAddress] = useState("");
  useEffect(() => {
    fetch("https://api.bigdatacloud.net/data/client-ip")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ipString));
  }, []);

  const [locationDetails, setLocationDetails] = useState({});

  useEffect(() => {
    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then((response) => response.json())
      .then((data) => setLocationDetails(data));
  }, []);

  return (
    <div className="App" style={styles}>
      <Quotable />
      <Clock country={locationDetails.country_name} />
      <Bottom
        country={locationDetails.country_name}
        city={locationDetails.city}
        timezone={locationDetails.timezone}
      />
    </div>
  );
}

export default App;
