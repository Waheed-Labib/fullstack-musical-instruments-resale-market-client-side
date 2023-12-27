import React from 'react';

const SearchBar = () => {
    return (
        <form>
            <input className='bg-accent border border-secondary rounded hover:cursor-pointer w-64 p-2 px-4 mr-3' type='text' placeholder='Search a Category'></input>
            <input type='submit' value='Search' className='p-[9px] px-4 bg-primary rounded text-white font-medium hover:bg-[#bf8f3c]'></input>
        </form>
    );
};

export default SearchBar;