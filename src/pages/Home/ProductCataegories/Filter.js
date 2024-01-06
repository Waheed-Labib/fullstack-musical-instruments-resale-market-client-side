import React from 'react';

const Filter = ({ setRegionFilter, setTypeFilter }) => {

    return (
        <div className='flex flex-col gap-3'>
            <div className='text-sm flex items-center gap-3'>
                <p className='text-start bg-primary text-accent p-[6px] rounded-sm w-48'>Type of Instruments :</p>
                <select onChange={event => setTypeFilter(event.target.value)} className='bg-accent border rounded p-[2px] hover:cursor-pointer w-48'>
                    <option>Show All</option>
                    <option>Percussion</option>
                    <option>Stringed</option>
                    <option>Keyboard</option>
                    <option>Wind</option>
                </select>
            </div>

            <div className='text-sm flex items-center gap-3'>
                <p className='text-start bg-primary text-accent p-[6px] rounded-sm w-48'>Regional Instruments :</p>
                <select onChange={event => setRegionFilter(event.target.value)} className='bg-accent border rounded p-[2px] hover:cursor-pointer w-48'>
                    <option>Show All</option>
                    <option>Asian Instruments</option>
                    <option>Western Instruments</option>
                    <option>Mixed Origin</option>
                </select>
            </div>

        </div>
    );
};

export default Filter;