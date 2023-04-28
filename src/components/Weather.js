import React from "react"

export default function Weather(data) {
  const weather = data.data;
  return (
    <>
      {weather.weather[0].main}
      {weather.name}
      {weather.main.temp.toFixed(0)}
      min: {weather.main.temp_min.toFixed(0)}
      max: {weather.main.temp_max.toFixed(0)}
      umidade: {weather.main.humidity}%
    </>
  )
}
