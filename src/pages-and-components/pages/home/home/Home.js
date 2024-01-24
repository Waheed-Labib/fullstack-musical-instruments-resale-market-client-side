import React from 'react';
import Slider from 'pages-and-components/pages/home/slider/Slider';
import ProductCategories from 'pages-and-components/shared-sections/product-categories/ProductCategories';
import useScrollToTop from 'hooks/useScrollToTop';

const Home = () => {
    useScrollToTop();

    return (
        <div className='text-center min-h-screen'>
            <Slider></Slider>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;