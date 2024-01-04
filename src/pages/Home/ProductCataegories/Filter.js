import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Filter = () => {
    const [addingFilter, setAddingFilter] = useState(false)
    return (
        <div className={`text-sm flex ${addingFilter ? 'items-start' : 'items-center'} gap-3`}>
            <p>Filter</p>
            {
                addingFilter ?
                    <form>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Asian</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Western</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Mixed Origin</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Stringed</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Percussion</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Wind</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox'></input>
                            <p>Keyboard</p>
                        </div>

                        <input className='btn btn-xs btn-primary w-full rounded-sm my-1 font-semibold' type='submit' value='Done'></input>
                        <br></br>
                        <input className='btn btn-xs btn-secondary w-full rounded-sm my-1 font-semibold' type='reset' value='Show All'></input>
                    </form>
                    :
                    <div onClick={() => setAddingFilter(true)} className='border rounded p-1 ps-4 flex items-center gap-2 hover:cursor-pointer'>
                        <p>All</p>
                        <FaAngleDown></FaAngleDown>
                    </div>
            }
        </div>
    );
};

export default Filter;