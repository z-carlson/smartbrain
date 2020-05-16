import React from 'react';
import Brain from './brain.svg';
import './Logo.css'

const Logo = () => {
    return (
        <div className="logoBox ma4 mt0">
            <div className="br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div><img src={Brain} alt="logo"/></div>
            </div>
        </div>
    );
}

export default Logo;