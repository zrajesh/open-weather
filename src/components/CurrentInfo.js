import React from 'react';
// Import css
import "./CurrentInfo.scss";

const CurrentInfo = ({current}) => {
    const {temp, sunrise, sunset, clouds, wind_speed, humidity, weather} 
    = current;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let currdate
    let day
    let month
    let year
    function set_time() {
        const date = new Date();
        currdate = date.getDate();
        day = date.getDay();
        month = date.getMonth() + 1;
        year = date.getFullYear();
    }
    set_time();
    return (
        <>
        <div className="current-weather-info">
            <div className="current-icon">
                <div className="current-days">
                    <p>
                    {days[day] + ", " + month + "/" + currdate + "/" + year}
                    </p>
                </div>
                <img 
                className="current-icon-image" 
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="icon" />
            </div>
            <div className="current-info">
                <p className="current-property">
                Temperature:
                <span className="current-value">{temp}</span>
                </p>
                <p className="current-property">
                Humidity: 
                <span className="current-value">{humidity}%</span>
                </p>
                <p className="current-property">
                Wind speed: 
                <span className="current-value">{wind_speed}</span>
                </p>
                <p className="current-property">
                Cloud cover: 
                <span className="current-value">{clouds}</span>
                </p>
                <p className="current-property">
                Sunset: 
                <span className="current-value">{sunset}</span>
                </p>
                <p className="current-property">
                sunrise: 
                <span className="current-value">{sunrise}</span>
                </p>
            </div>
        </div>
        <hr className="current-line" />
        </>
    );
};

export default CurrentInfo;
