import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    console.log(date);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <>
      <div className="weatherForecast-day">{day()}</div>
      <img src={props.data.condition.icon_url}></img>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="weatherForecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </>
  );
}
