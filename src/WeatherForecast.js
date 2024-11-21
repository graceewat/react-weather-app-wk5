import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherForecastData, setWeatherForecastData] = useState(null);
  function handleResponse(response) {
    setWeatherForecastData(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {weatherForecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const cityForecast = `${props.city}`;
    const apiKeyForecast = "f03c7t04000f0dbod331aeefa47ad1f6";
    let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${cityForecast}&key=${apiKeyForecast}`;
    axios.get(apiUrlForecast).then(handleResponse);
    return "Loading...";
  }
}
