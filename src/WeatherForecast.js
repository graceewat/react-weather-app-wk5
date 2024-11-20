import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
}
