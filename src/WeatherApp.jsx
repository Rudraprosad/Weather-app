import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "kolkata",
        description: "clear sky",
        feelsLike: 18.69,
        humidity: 42,
        tempMax: 19.58,
        tempMin: 19.58,
        temperature: 19.58
    });
     
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center"}}>
           <h2> Weather App by Rudra</h2>
           <SearchBox updateInfo={updateInfo} />
           <InfoBox info={weatherInfo}/>
        </div>
    );
}