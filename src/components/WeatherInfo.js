import React from 'react';
import CurrentInfo from './CurrentInfo';
import DaysInfo from './DaysInfo';

const WeatherInfo = () => {
    return (
        <div className="weather-info">
            <CurrentInfo />
            <DaysInfo />
        </div>
    );
};

export default WeatherInfo;
