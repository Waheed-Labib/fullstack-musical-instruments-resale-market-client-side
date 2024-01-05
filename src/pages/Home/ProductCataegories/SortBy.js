import React from 'react';

const SortBy = ({ setSortBy, refetch }) => {

    const handleSortByOptionChange = event => {
        setSortBy(event.target.value);
    }

    return (
        <div className='text-sm flex items-center gap-3'>
            <p className=''>Sort By : </p>
            <select onChange={handleSortByOptionChange} className='bg-accent border rounded p-[2px] hover:cursor-pointer'>
                <option>name</option>
                <option>type</option>
                <option>region</option>
            </select>
        </div>
    );
};

export default SortBy;