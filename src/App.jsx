
import React, { useState } from "react";
import WeatherApp from "./components/WeatherApp";
import "./App.css";

const App = () => {
  const [condition, setCondition] = useState("sunny");

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <div className={`app-container map-bg ${condition}`}>
      <div className="controls">
        <select onChange={handleConditionChange} value={condition}>
          <option value="sunny">Sunny</option>
          <option value="cloudy">Cloudy</option>
          <option value="rainy">Rainy</option>
          <option value="snowy">Snowy</option>
        </select>
      </div>
      <WeatherApp />
    </div>
  );
};

export default App;