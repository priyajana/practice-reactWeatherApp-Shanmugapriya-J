import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";


const weatherData = 
{
    NewYork: {
                summary: "Sunny, 25°C",
                details: "Clear skies throughout the day with mild temperatures.",
            },
    London: {
                summary: "Cloudy, 18°C",
                details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
                summary: "Rainy, 22°C",
                details: "Continuous rain expected throughout the day.",
    },
};
function App() {
  

  return (
    <>
      <div className="App">
           <Router>
            <Routes>
                      <Route path="/" element={<CityList cities={weatherData}/>} />
                      <Route path="/forecast/:cityName" element={<CityForecast weatherData={weatherData} />} />
            </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
