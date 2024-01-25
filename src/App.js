import React, { Component } from "react";
import axios from "axios";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import background from "./img/weatherbg.jpg";

class SunIcon extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
    // OpenWeatherMap API key
    this.apiKey = "ee801a227be267fb82a1d1a6fb320e0c";
  }

  fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );
      this.setState({ weatherData: response.data });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    }
  };

  render() {
    const { weatherData } = this.state;

    return (
      <div
        className="container mx-auto px-4 py-8 bg-gradient-to-r from-sky-500 to-indigo-500"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-4xl font-bold mb-6">
          <SunIcon />
          Weather App
        </h1>
        <SearchBar onSearch={this.fetchWeatherData} />
        <Weather weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
