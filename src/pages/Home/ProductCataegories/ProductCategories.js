import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SortBy from './SortBy';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Loading from '../../../components/Loading/Loading';
import NothingToShow from '../../../components/NothingToShow/NothingToShow';

const ProductCategories = () => {

    const [sortBy, setSortBy] = useState('name');
    const [regionFilter, setRegionFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [searchCategory, setSearchCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

    const handleCancelSearch = () => {
        setSearchCategory('')

        // to erase previous filters and show all categories
        setRegionFilter('')
        setTypeFilter('')
    }

    useEffect(() => {
        setIsCategoriesLoading(true);
        fetch(`http://localhost:5000/categories?sortBy=${sortBy}&region=${regionFilter}&type=${typeFilter}&search=${searchCategory}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setIsCategoriesLoading(false)
            })
    }, [sortBy, regionFilter, typeFilter, searchCategory])

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-zcool'>Product Categories</h2>

            <div className='flex justify-center gap-6 items-start px-16 mt-12'>
                {/* when searching is being done, the filter options won't be necessary */}
                {/* During searching, a cancel option will be on display instead*/}
                {
                    searchCategory ?
                        <p onClick={handleCancelSearch} className='rounded-[50%] w-8 h-8 bg-base-100 text-accent p-1 hover:cursor-pointer'>X</p>
                        :
                        <Filter setRegionFilter={setRegionFilter} setTypeFilter={setTypeFilter}></Filter>
                }

                <div className='flex flex-col gap-2'>
                    <SortBy setSortBy={setSortBy}></SortBy>
                    <SearchBar searchCategory={searchCategory} setSearchCategory={setSearchCategory} setRegionFilter={setRegionFilter} setTypeFilter={setTypeFilter}></SearchBar>
                </div>
            </div>

            {
                isCategoriesLoading ?
                    <Loading></Loading>
                    :
                    <>
                        {
                            categories.length ?
                                <div className='mt-12 grid grid-cols-4 gap-0'>
                                    {
                                        categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                                    }

                                </div>
                                :
                                <NothingToShow></NothingToShow>
                        }
                    </>


            }

        </div>
    );
};

export default ProductCategories;