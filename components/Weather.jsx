import React, {useState, useEffect}  from "react";
import axios from "axios";

function Weather () {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null)
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const getPosition = () =>
            new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
    
          const position = await getPosition();
          const { latitude, longitude } = position.coords;
    
          const response = await axios.get(
            `${API_BASE_URL}/weather`,
            { params: { lat: latitude, lon: longitude } }
          );
    
          setWeather(response.data);
        } catch (err) {
          console.error("Weather fetch error:", err.response || err.message);
          if (err.code === 1) {
            setError("Geolocation permission denied");
          } else {
            setError("Failed to fetch weather data");
          }
        }
      };
    
      fetchWeather();
    }, []);
    
      console.log(weather);

    if (error) return <p>{error}</p>
    if (!weather) return <p>Loading...</p>;

    const {
        location: {name, region, country, localtime},
        current: {
            temp_f,
            condition: {text, icon},
            feelslike_f,
            humidity,
            wind_mph,
        }
    } = weather;

    return (
        <div className="weatherBox">
            <h3>Weather in {name}, {region}, {country} </h3>
            <p><strong>Condition: </strong> {text} <img src={icon} alt={text} ></img> </p>
            <p><strong>Local Time: </strong> {localtime} </p> 
            <p><strong>Tempurature: </strong> {temp_f} °F </p>
            <p><strong>Feels Like: </strong>{feelslike_f} °F </p>
            <p><strong>Humidity: </strong>{humidity}%</p>
            <p><strong>Wind: </strong>{wind_mph} mph</p>
        </div>
    )
}

export default Weather;
