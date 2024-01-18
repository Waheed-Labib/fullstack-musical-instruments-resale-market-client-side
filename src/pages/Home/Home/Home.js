import React from 'react';
import Slider from '../Slider/Slider';
import ProductCategories from '../../Shared/ProductCataegories/ProductCategories';

const Home = () => {
    return (
        <div className='text-center min-h-screen'>
            <Slider></Slider>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;