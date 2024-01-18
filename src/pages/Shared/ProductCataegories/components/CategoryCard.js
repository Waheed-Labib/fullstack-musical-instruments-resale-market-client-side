import React, { useContext } from 'react';
import './CategoryCard.css'
import { ThemeContext } from '../../../../contexts/ThemeProvider/ThemeProvider';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { mode } = useContext(ThemeContext);

    const { name, image, region, type } = category;

    return (
        <Link to={`/Categories/${name}`} className={`w-[265px] h-[180px] mb-5 category-card rounded pt-14 pb-5 ps-4 pe-3 text-start flex justify-center items-center gap-2 category-card-${mode}-mode `}>
            <img src={image} alt={name}></img>
            <div className='flex flex-col items-end gap-1'>
                <div className='text-end'>
                    <p className='text-3xl font-semibold font-zcool text-primary mb-1'>{name}</p>
                    <p className='text-sm'>9 items available</p>
                </div>

                <p className='text-lg'>{region}, {type}</p>

            </div>
        </Link>
    );
};

export default CategoryCard;