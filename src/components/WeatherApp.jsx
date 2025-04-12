
import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const WeatherApp = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const handleSearch = async (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setWeather({ ...weather, loading: true, error: null });

      try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: input,
            units: "metric",
            appid: "F00c38e0279b7bc85480c3fe775d518c", 
          },
        });

        setWeather({
          loading: false,
          data: response.data,
          error: null,
        });

        setInput("");
      } catch (err) {
        console.error(err);
        setWeather({
          loading: false,
          data: null,
          error: "City not found. Please try again.",
        });
      }
    }
  };

  return (
    <div className="weather-card">
      <input
        type="text"
        className="city-input"
        placeholder="Enter City Name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSearch}
        disabled={weather.loading}
      />

      {weather.loading && <p className="loading">Loading...</p>}
      {weather.error && <p className="error">{weather.error}</p>}

      {weather.data && (
        <div className="weather-info">
          <h2>{weather.data.name}</h2>
          <p className="description">{weather.data.weather[0].description}</p>
          <p className="temperature">Temperature: {weather.data.main.temp}°C</p>
          <p className="humidity">Humidity: {weather.data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;