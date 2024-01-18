import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesDiv = ({ categories }) => {

    return (
        <div className='flex flex-wrap justify-center gap-8 mt-5'>
            {
                categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default CategoriesDiv;