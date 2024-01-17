import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import './PageHeadline.css';

const PageHeadline = ({ pageName, breadcrumbs }) => {

    const { mode } = useContext(ThemeContext);

    return (
        <div className='page-headline'>
            <div className={`page-headline-content-${mode}-mode flex flex-col items-center py-16`}>
                <p className={`text-5xl font-medium font-zcool mb-5 ${mode === 'dark' ? 'text-primary' : 'text-neutral'}`}>{pageName.toUpperCase()}</p>
                {breadcrumbs}
            </div>
        </div>
    );
};

export default PageHeadline;