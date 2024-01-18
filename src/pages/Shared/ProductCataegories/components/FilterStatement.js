import React from 'react';

const FilterStatement = ({ regionFilter, typeFilter, searchFieldValue }) => {
    let filterStatement = ''

    if (regionFilter === 'Show All' && typeFilter === 'Show All') {
        filterStatement = 'Showing All Instruments'
    }

    if (regionFilter !== 'Show All' && typeFilter !== 'Show All') {
        filterStatement = `Showing ${typeFilter} & ${regionFilter}`

    }

    else if (regionFilter !== 'Show All') {
        filterStatement = `Showing ${regionFilter}`

    }
    else if (typeFilter !== 'Show All') {
        filterStatement = `Showing ${typeFilter} instruments`
    }

    return (
        <p className='mt-5 text-lg'>{filterStatement}</p>
    );
};

export default FilterStatement;