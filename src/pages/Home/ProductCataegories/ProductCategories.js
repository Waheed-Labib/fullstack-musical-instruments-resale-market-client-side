import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SortBy from './SortBy';
import SearchBar from './SearchBar';
import { useQuery } from '@tanstack/react-query';
import Filter from './Filter';

const ProductCategories = () => {

    const [sortBy, setSortBy] = useState('name');
    const [areaFilter, setAreaFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [searchCategory, setSearchCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

    useEffect(() => {
        setIsCategoriesLoading(true);
        fetch(`http://localhost:5000/categories?sortBy=${sortBy}&area=${areaFilter}&type=${typeFilter}&search=${searchCategory}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setIsCategoriesLoading(false)
            })
    }, [sortBy, areaFilter, typeFilter, searchCategory])

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-zcool'>Product Categories</h2>

            <div className='flex justify-between items-start px-16 mt-12'>
                <div className='flex flex-col gap-6'>
                    <SortBy setSortBy={setSortBy}></SortBy>
                    <SearchBar searchCategory={searchCategory} setSearchCategory={setSearchCategory}></SearchBar>
                </div>
                {
                    searchCategory ?
                        <p onClick={() => setSearchCategory('')} className='rounded-[50%] w-8 h-8 bg-base-100 text-accent p-1 hover:cursor-pointer'>X</p>
                        :
                        <Filter setAreaFilter={setAreaFilter} setTypeFilter={setTypeFilter}></Filter>
                }

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