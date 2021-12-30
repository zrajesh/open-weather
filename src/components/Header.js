import React from 'react';

import "./Header.scss";

const Header = () => {
    return (
        <div>
            <div className="header">
                <h2 className="header-title">Open Weather</h2>
            </div>
            <hr className="header-line" />
        </div>
    );
};

export default Header;
