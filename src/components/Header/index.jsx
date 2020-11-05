import React from 'react';
import './style.css';

const Header = ({ imgSrc, imgAlt}) => (
    <div className="header">
        <div className="imgWrapper">
            <img src={imgSrc} alt={imgAlt} />
        </div>
    </div>
);

export default Header;