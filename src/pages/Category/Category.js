import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeadline from '../Shared/PageHeadline/PageHeadline';
import usePageName from '../../hooks/usePageName';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';

const Category = () => {

    const { mode } = useContext(ThemeContext)

    const pageName = usePageName();
    const breadcrumbs = <div className="breadcrumbs">
        <ul>
            <li><Link className={`hover:cursor-none ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`} to='/'>Home</Link></li>
            <li><Link className={`hover:cursor-none ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`} to='/categories'>Categories</Link></li>
            <li>{pageName}</li>
        </ul>
    </div>

    const products = useLoaderData();

    return (
        <div>
            <PageHeadline pageName={pageName} breadcrumbs={breadcrumbs}></PageHeadline>
        </div>
    );
};

export default Category;