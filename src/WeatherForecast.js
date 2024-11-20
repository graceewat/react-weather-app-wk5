import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [weatherForecastData, setWeatherForecastData] = useState({
    ready: false,
  });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherForecastData({
      dailyData: response.data.daily,
      ready: true,
    });
    console.log(setWeatherForecastData.dailyData);
  }
  if (weatherForecastData.ready) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thu</div>
            <img
              src={weatherForecastData.dailyData[0].condition.icon_url}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(
                  weatherForecastData.dailyData[0].temperature.maximum
                )}
                °
              </span>
              <span className="weatherForecast-temp-min">
                {Math.round(
                  weatherForecastData.dailyData[0].temperature.minimum
                )}
                °
              </span>
            </div>
          </div>
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
