import React, { useEffect, useState } from 'react';
import SortBy from './components/SortBy';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Loading from '../../../components/Loading/Loading';
import NothingToShow from '../../../components/NothingToShow/NothingToShow';
import CategoriesDiv from './components/CategoriesDiv';

const ProductCategories = () => {

    const [sortBy, setSortBy] = useState('name');
    const [regionFilter, setRegionFilter] = useState('Show All');
    const [typeFilter, setTypeFilter] = useState('Show All');
    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [categories, setCategories] = useState([])
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

    const handleCancelSearch = () => {
        setSearchFieldValue('')

        // cancel the previous filters
        setTypeFilter('Show All')
        setRegionFilter('Show All')
    }

    useEffect(() => {
        setIsCategoriesLoading(true);
        fetch(`http://localhost:5000/categories?sortBy=${sortBy}&region=${regionFilter}&type=${typeFilter}&search=${searchFieldValue}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setIsCategoriesLoading(false)
            })
    }, [sortBy, regionFilter, typeFilter, searchFieldValue])

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-zcool'>Product Categories</h2>

            <div className='flex justify-center gap-8 items-start px-16 mt-12'>

                {
                    !searchFieldValue && <Filter regionFilter={regionFilter} typeFilter={typeFilter} setRegionFilter={setRegionFilter} setTypeFilter={setTypeFilter} searchFieldValue={searchFieldValue}></Filter>
                }



                <div className='flex flex-col gap-2'>
                    <SortBy setSortBy={setSortBy}></SortBy>
                    <SearchBar searchFieldValue={searchFieldValue} setSearchFieldValue={setSearchFieldValue} setRegionFilter={setRegionFilter} setTypeFilter={setTypeFilter}></SearchBar>
                </div>
            </div>

            {
                isCategoriesLoading ?
                    <Loading></Loading>
                    :
                    <div className='mt-12 flex flex-col items-center'>

                        {
                            searchFieldValue &&
                            <button onClick={handleCancelSearch} className='btn btn-neutral btn-xs mt-5'>
                                Cancel Search
                                <span className="border-l p-1">Esc</span>
                            </button>
                        }

                        {
                            categories.length ?

                                <CategoriesDiv categories={categories}></CategoriesDiv>
                                :
                                <NothingToShow></NothingToShow>
                        }


                    </div>


            }

        </div >
    );
};

export default ProductCategories;