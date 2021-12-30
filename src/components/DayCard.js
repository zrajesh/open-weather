import React from 'react';

import "./DayCard.scss";

const DayCard = ({day}) => {
    return (
        <div className="day">
            <div className="day-header">
                <img
                className="day-icon" 
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon" 
                />
            </div>
        
            <div className="day-body">
                <p className="current-property">
                Temperature:
                <span className="current-value">{day.temp.day}°C</span>
                </p>
                <p className="current-property">
                Humidity: 
                <span className="current-value">{day.humidity}</span>
                </p>
                <p className="current-property">
                Wind speed: 
                <span className="current-value">{day.wind_speed}</span>
                </p>
                <p className="current-property">
                Cloud cover: 
                <span className="current-value">{day.clouds}</span>
                </p>
                <p className="current-property">
                Sunset: 
                <span className="current-value">{day.sunset}</span>
                </p>
                <p className="current-property">
                sunrise: 
                <span className="current-value">{day.sunrise}</span>
                </p>
            </div>
        </div>
    );
};

export default DayCard;
