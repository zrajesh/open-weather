import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrentInfo from '../components/CurrentInfo';
import DaysInfo from '../components/DaysInfo';
import Header from '../components/Header';
// Import css
import "./Weather.scss";

const Weather = () => {
    const [current, setCurrent] = useState({
        temp: "",
        sunrise: "",
        sunset: "",
        clouds: "",
        wind_speed: "",
        humidity: "",
        weather: [{icon: ""}]
    });

    const [daily, setDaily] = useState([{
        temp: {
            day: "temp"
        },
        sunrise: "",
        sunset: "",
        clouds: "",
        wind_speed: "",
        humidity: "",
        weather: [{icon: ""}]
    }
]);

    const API_KEY = "f4b55a0bc4cbb55c5b331fd00a77e571";

    const fetch_data =   () => {
        navigator.geolocation.getCurrentPosition((success) => {
            let latitude = success.coords.latitude;
            let longitude = success.coords.longitude;
            // API call
            axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`)
            .then(response => {
                setCurrent(response.data.current);
                setDaily(response.data.daily);
            })
            .catch(err => console.log("ERROR: ", err))
        });
    }

    useEffect(() => {
        fetch_data();
    }, []);

    return (
        <div className="weather">
            <Header />
            <CurrentInfo current={current} />
            <DaysInfo daily={daily} />
        </div>
    );
};

export default Weather;
