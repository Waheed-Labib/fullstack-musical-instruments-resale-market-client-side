import React from 'react';
import SliderBtn from './SliderBtn';

const Slider = () => {
    return (
        <div className="carousel w-full mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt='' className="w-full" />
                <div className="absolute flex flex-col gap-2 top-5 right-5">
                    <SliderBtn btnDisabled={true}></SliderBtn>
                    <a href="#slide2">
                        <SliderBtn></SliderBtn>
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt='' className="w-full" />
                <div className="absolute flex flex-col gap-2 top-5 right-5">
                    <a href="#slide1">
                        <SliderBtn></SliderBtn>
                    </a>
                    <SliderBtn btnDisabled={true}></SliderBtn>
                </div>
            </div>
        </div>
    );
};

export default Slider;