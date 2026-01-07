import "./SearchBox.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b1f3bca37326ec6d16d55ff177d94ed3";

    let getWeatherInfo = async() => {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temperature: jsonResponse.main.temp,
            humidity: jsonResponse.main.humidity,
            description: jsonResponse.weather[0].description,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
        };
        console.log(result);
        return result;
    };

let handleChange = (event) => {
    setCity(event.target.value);
};

let handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Searching weather for:", city);
     getWeatherInfo(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
};

    return (
        <div className="searchBox">
           
<form onSubmit={handleSubmit}>
<TextField 
id="city" 
label="City Name" 
variant="outlined" 
required
value={city}
onChange={handleChange}
/>
<br></br>
<br></br>
<Button variant="contained" type="submit">
        Search
      </Button>
            </form>
        </div>
    );
}