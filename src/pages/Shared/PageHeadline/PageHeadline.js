import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import './PageHeadline.css';

const PageHeadline = ({ pageName, breadcrumbs }) => {

    const { mode } = useContext(ThemeContext);

    return (
        <div className='page-headline'>
            <div className={`page-headline-content-${mode}-mode flex flex-col items-center py-24`}>
                <p className='text-4xl font-zcool mb-5'>{pageName.toUpperCase()}</p>
                {breadcrumbs}
            </div>
        </div>
    );
};

export default PageHeadline;