import React, { useContext } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';

const Pagination = ({ options, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, totalPage }) => {

    const { mode } = useContext(ThemeContext)

    const handleIncreasePageNumber = () => {
        if (currentPage === totalPage) setCurrentPage(1)
        else setCurrentPage(currentPage + 1)
    }

    const handleReducePageNumber = () => {
        if (currentPage === 1) setCurrentPage(totalPage)
        else setCurrentPage(currentPage - 1)
    }

    const handleItemsPerPageChange = event => {
        setItemsPerPage(event.target.value);
        setCurrentPage(1)
    }

    return (
        <div className={`mb-12 flex items-center justify-center gap-12 text-black`}>
            {/* pages */}
            <div className='flex items-center justify-center bg-secondary rounded-xl h-[52px]'>
                <div onClick={handleReducePageNumber} className={`p-3 pl-6 ${mode === 'dark' ? 'border-black' : 'border-white'} border-r-4 h-[52px] flex items-center rounded-l-xl transition hover:bg-[#979797]`}>
                    <FaAngleLeft></FaAngleLeft>
                </div>

                <div className='py-3 px-6 h-[52px] flex items-center'>
                    <p>Page
                        <span className='mx-3 text-lg font-semibold'>{currentPage}</span>
                        of
                        <span className='mx-3 text-lg font-semibold'>{totalPage}</span>
                    </p>
                </div>

                <div onClick={handleIncreasePageNumber} className={`p-3 pr-6 ${mode === 'dark' ? 'border-black' : 'border-white'} border-l-4 h-[52px] flex items-center rounded-r-xl transition hover:bg-[#979797]`}>
                    <FaAngleRight></FaAngleRight>
                </div>
            </div>

            {/* select data per page */}
            <div>
                <label className={`font-semibold ${mode === 'dark' ? 'text-white' : "text-black"}`} for="itemsPerPage">Items per Page &nbsp;: &nbsp;</label>

                <select name='itemsPerPage' className='ms-1 border-2 px-2 rounded bg-secondary' onChange={handleItemsPerPageChange}>
                    {
                        options.map(option => <option value={option}>{option}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Pagination;