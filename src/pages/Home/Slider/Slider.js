import React from 'react';
import SliderBtn from './SliderBtn';
import slide1 from '../../../assets/images/slider/slide1.webp';
import slide2 from '../../../assets/images/slider/slide2.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item w-full flex justify-center items-center gap-[10%]">
                <img src={slide1} alt='musical instruments' className="hidden sm:block w-2/5 mt-9 rounded" />

                <div className='w-2/3 sm:w-2/5 relative flex flex-col justify-center items-center carousel-text p-5'>
                    <h2 className='text-3xl font-bold font-zcool'>Find Your Favourite Classical Music Instruments</h2>
                    <p className='text-lg mt-2'>from the biggest musical instruments resale market</p>

                    <div className="flex gap-2 mt-16">
                        <SliderBtn btnDisabled={true}></SliderBtn>
                        <a href="#slide2">
                            <SliderBtn></SliderBtn>
                        </a>
                    </div>
                </div>


            </div>

            <div id="slide2" className="carousel-item w-full flex justify-center items-center gap-[10%]">

                <div className='w-2/3 sm:w-2/5 relative flex flex-col justify-center items-center carousel-text p-5'>
                    <h2 className='text-3xl font-bold font-zcool'>Buy and Sell at resonable price</h2>
                    <p className='text-lg mt-2'>at the biggest musical instruments resale market</p>

                    <div className="flex gap-2 mt-16">
                        <a href="#slide1">
                            <SliderBtn></SliderBtn>
                        </a>
                        <SliderBtn btnDisabled={true}></SliderBtn>
                    </div>
                </div>

                <img src={slide2} alt='lady with phone and dollars' className="w-2/5 rounded hidden sm:block" />

            </div>

        </div>
    );
};

export default Slider;