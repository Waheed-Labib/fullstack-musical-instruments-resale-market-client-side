import React from 'react';

const SearchBar = ({ searchCategory, setSearchCategory, setAreaFilter, setTypeFilter }) => {

    const handleSearchCategoriesChange = event => {
        setSearchCategory(event.target.value);
        if (!event.target.value) {
            // to erase previous filters and show all categories
            setAreaFilter('')
            setTypeFilter('')
        }
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <input onChange={handleSearchCategoriesChange} className='bg-accent border border-secondary rounded hover:cursor-pointer w-72 p-4 mr-3' type='text' placeholder='Search a Category' value={searchCategory}></input>
            <input type='submit' value='Search' className='p-4 bg-primary rounded text-white font-medium hover:bg-[#bf8f3c]'></input>
        </form>
    );
};

export default SearchBar;