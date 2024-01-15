import React from 'react';
import { TbMoodEmpty } from 'react-icons/tb'

const NothingToShow = () => {
    return (
        <div className='flex flex-col items-center gap-4 mt-28'>
            <div className='text-6xl'>
                <TbMoodEmpty></TbMoodEmpty>
            </div>

            <p className='text-2xl font-semibold'>Nothing to Show</p>

        </div>
    );
};

export default NothingToShow;