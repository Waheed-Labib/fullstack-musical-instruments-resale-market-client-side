import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import usePageName from '../../hooks/usePageName';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';
import PageHeadline from '../Shared/PageHeadline/PageHeadline';
import ProductCategories from '../Shared/ProductCataegories/ProductCategories';

const Categories = () => {
    const { mode } = useContext(ThemeContext)

    const pageName = usePageName();
    const breadcrumbs = <div className="breadcrumbs text-lg">
        <ul>
            <li><Link className={`hover:cursor-none ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`} to='/'>Home</Link></li>
            <li>Categories</li>
        </ul>
    </div>

    return (
        <div>
            <PageHeadline pageName={pageName} breadcrumbs={breadcrumbs}></PageHeadline>
            <ProductCategories hideH2={true}></ProductCategories>
        </div>
    );
};

export default Categories;