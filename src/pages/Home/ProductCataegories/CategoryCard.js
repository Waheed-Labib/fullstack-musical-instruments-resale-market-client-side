import React, { useContext } from 'react';
import './CategoryCard.css'
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';

const CategoryCard = ({ category }) => {

    const { mode } = useContext(ThemeContext);

    const { name, tags, image } = category;

    return (
        <div className={`py-5 text-start flex justify-center items-center gap-6 category-card-${mode}-mode hover:cursor-pointer`}>
            <img className='w-20 h-20' src={image} alt={name}></img>
            <div>
                <p className='text-3xl font-semibold font-zcool text-primary'>{name}</p>
                <p>9 items available</p>
            </div>
        </div>
    );
};

export default CategoryCard;