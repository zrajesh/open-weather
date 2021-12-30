import React from 'react';
import DayCard from './DayCard';
// Import css
import "./DaysInfo.scss";

const DaysInfo = ({daily}) => {
    return (
        <div className="days-info">
            {
                // Conditional rendering of cards based on api calls
                daily.length > 1 ?
                <>
                <DayCard day={daily[1]} />
                <DayCard day={daily[2]} />
                <DayCard day={daily[3]} />
                <DayCard day={daily[4]} />
                <DayCard day={daily[5]} />
                <DayCard day={daily[6]} />
                <DayCard day={daily[7]} />
                </>
                : <DayCard day={daily[0]} />
            }
        </div>
    );
};

export default DaysInfo;

