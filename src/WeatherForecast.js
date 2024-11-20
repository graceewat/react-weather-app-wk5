import React, { UseState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [weatherForecastData, setWeatherForecastData] = useState({
    ready: false,
  });
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKeyForecast = "f03c7t04000f0dbod331aeefa47ad1f6";
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKeyForecast}`;
  axios.get(apiUrlForecast).then(handleResponse);

  if (weatherData.ready) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thu</div>
            <img src={props.data.image} alt={props.data.conditions}></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">19°</span>
              <span className="weatherForecast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
