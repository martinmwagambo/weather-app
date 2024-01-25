import React, { Component } from "react";

class Weather extends Component {
  render() {
    const { weatherData } = this.props;

    if (!weatherData) {
      return <p>No weather data available.</p>;
    }

    const { main, weather, name, pressure, rain } = weatherData;
    const { temp, humidity } = main;
    const weatherCondition = weather[0].main; // Assuming the weather condition is in the first element

    // Map weather conditions to corresponding icons
    const weatherIcons = {
      Clear: "🌞",
      Clouds: "☁️",
      Rain: "🌧️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️",
      // Add more conditions and icons as needed
    };

    const icon = weatherIcons[weatherCondition] || "🤷‍♂️"; // Default icon for unknown conditions

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700 mb-2">Temperature: {temp}°C</p>
        <p className="text-gray-700 mb-2">Humidity: {humidity}%</p>
        <p className="text-gray-700 mb-2">Conditions: {weatherCondition}</p>
        <p className="text-gray-700 mb-2">Pressure: {pressure} hPa</p>
        <p className="text-gray-700 mb-2">Icon: {icon}</p>
        {rain && (
          <p className="text-gray-700 mb-2">Rain: {rain["1h"]} mm (last hour)</p>
        )}
      </div>
    );
  }
}

export default Weather;
