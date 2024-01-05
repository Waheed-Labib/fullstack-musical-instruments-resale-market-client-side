import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SortBy from './SortBy';
import SearchBar from './SearchBar';
import { useQuery } from '@tanstack/react-query';
import Filter from './Filter';

const ProductCategories = () => {

    const [sortBy, setSortBy] = useState('name');
    const [filterOptions, setFilterOptions] = useState([]);
    const [categories, setCategories] = useState([])
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

    useEffect(() => {
        setIsCategoriesLoading(true);
        fetch(`http://localhost:5000/categories?sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setIsCategoriesLoading(false)
            })
    }, [sortBy, filterOptions])

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-zcool'>Product Categories</h2>

            <div className='flex justify-between items-start px-16 mt-12'>
                <div className='flex flex-col gap-6'>
                    <SortBy setSortBy={setSortBy}></SortBy>
                    <SearchBar></SearchBar>
                </div>
                <Filter setFilterOptions={setFilterOptions}></Filter>
            </div>

            {
                isCategoriesLoading ?
                    <div>Loading ...</div>
                    :
                    <div className='mt-12 grid grid-cols-4 gap-0'>
                        {
                            categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                        }
                    </div>
            }

        </div>
    );
};

export default ProductCategories;