import React from 'react';
import compassLogo from '../Images/compass.jpg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={compassLogo} alt="logo" className="logo" />
        </div>
    );
}

export default Logo;