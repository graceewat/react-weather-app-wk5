import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />

        <footer>
          This project was coded by Grace Waterman and is open-sourced on{" "}
          <a
            href="https://github.com/graceewat/react-weather-app-wk5"
            target="blank"
          >
            Github.
          </a>{" "}
          Hosted on{" "}
          <a href="https://react-weather-app-grace.netlify.app/" target="blank">
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
