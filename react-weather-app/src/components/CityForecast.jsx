import { useState } from "react";
import { useParams } from "react-router-dom";
import  { useEffect } from 'react';


export default function CityForecast({weatherData})
{
   const cityName = useParams();
   const city = cityName['cityName'];
   const [weatherInfo,setWeatherInfo] = useState({});
   const emojis = {Sunny:127774,Rainy:9748,Cloudy:9925}
   
   function getWeatherInfo(city)
   {
        setWeatherInfo(weatherData[city]);
        
        
   }

   useEffect(() => 
    {
        getWeatherInfo(city);
    });
    const weather = weatherInfo['summary'];
    console.log(weather);
    
    const emoji_to_display =weather? emojis[weather.split(",")[0]]:"";
    console.log(emoji_to_display);
    //${String.fromCodePoint({emoji_to_display})}
    return (
            <div className="weather-card">
                <h3>Weather Info for {city}</h3>
                <p>Summary: {weatherInfo['summary']}<span>{emoji_to_display && String.fromCodePoint(emoji_to_display)}</span></p>
                <p>Details: {weatherInfo['details']}</p>
            </div>
       );
}   