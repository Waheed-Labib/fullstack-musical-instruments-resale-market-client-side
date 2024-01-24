import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import usePageName from 'hooks/usePageName';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';
import PageHeadline from 'pages-and-components/shared-sections/page-headline/PageHeadline';
import ProductCategories from 'pages-and-components/shared-sections/product-categories/ProductCategories';
import useScrollToTop from 'hooks/useScrollToTop';

const Categories = () => {

    useScrollToTop();

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