import React from 'react';

const SortBy = ({ setSortBy, refetch }) => {

    return (
        <div className='text-sm flex items-center gap-3'>
            <p className='bg-primary text-accent p-[6px] rounded-sm text-start'>Sort By :</p>
            <select onChange={event => setSortBy(event.target.value)} className='bg-accent border rounded p-[2px] hover:cursor-pointer'>
                <option>name</option>
                <option>type</option>
                <option>region</option>
            </select>
        </div>
    );
};

export default SortBy;