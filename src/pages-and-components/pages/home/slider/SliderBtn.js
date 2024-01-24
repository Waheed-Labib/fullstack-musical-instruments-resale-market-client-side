import React from 'react';
import './SliderBtn.css'

const SliderBtn = ({ btnDisabled }) => {

    return (
        <div className={`${btnDisabled ? 'disabled-slider-btn' : 'active-slider-btn'}`}>

        </div>
    );
};

export default SliderBtn;