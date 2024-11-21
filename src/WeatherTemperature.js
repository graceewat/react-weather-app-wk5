import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  return (
    <span className="weatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">°C </span>
    </span>
  );
}
