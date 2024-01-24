import React from 'react';

const SearchBar = ({ searchFieldValue, setSearchFieldValue, setRegionFilter, setTypeFilter }) => {

    const handleEscPress = event => {
        if (event.key === 'Escape') setSearchFieldValue('')

        // cancel the previous filters
        setTypeFilter('Show All')
        setRegionFilter('Show All')
    }

    const handleSearchCategoriesChange = event => {
        setSearchFieldValue(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <input onKeyDown={handleEscPress} onChange={handleSearchCategoriesChange} className='bg-accent border border-secondary rounded  w-72 p-4 mr-3' type='text' placeholder='Search a Category' value={searchFieldValue}></input>
            <input type='submit' value='Search' className='p-4 bg-primary rounded text-accent font-medium hover:bg-[#bf8f3c]'></input>
        </form>
    );
};

export default SearchBar;