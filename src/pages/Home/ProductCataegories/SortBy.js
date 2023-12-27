import React from 'react';

const SortBy = () => {
    return (
        <div className='text-sm flex items-center gap-3'>
            <p>Sort By</p>
            <select className='bg-accent border rounded p-[2px] hover:cursor-pointer'>
                <option>Name</option>
                <option>Type</option>
            </select>
        </div>
    );
};

export default SortBy;