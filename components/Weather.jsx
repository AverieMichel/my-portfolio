import React, {useState, useEffect}  from "react";
import axios from "axios";

function Weather () {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await axios.get('https://my-port-back-3cd7b6fcf498.herokuapp.com/weather', {
                params: { lat: latitude, lon: longitude }
              });
              setWeather(response.data);
            } catch (err) {
              setError("Failed to fetch weather data");
            }
          },
          () => {
            setError("Geolocation permission denied");
          }
        );
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
