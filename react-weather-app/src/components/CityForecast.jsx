import { useState } from "react";
import { useParams } from "react-router-dom";
import  { useEffect } from 'react';


export default function CityForecast({weatherData})
{
   const cityName = useParams();
   const city = cityName['cityName'];
   const [weatherInfo,setWeatherInfo] = useState("");

   function getWeatherInfo(city)
   {
        setWeatherInfo(weatherData[city]);
   }

   useEffect(() => 
    {
        getWeatherInfo(city);
    }, []);


    return (
            <div>
                <h3>Weather Info for {city}</h3>
                <p>Summary: {weatherInfo['summary']}</p>
                <p>Details: {weatherInfo['details']}</p>
            </div>
       );
}   