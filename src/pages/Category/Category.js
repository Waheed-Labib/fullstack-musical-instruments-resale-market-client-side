import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeadline from '../Shared/PageHeadline/PageHeadline';
import usePageName from '../../hooks/usePageName';
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';
import ProductCard from './ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';

const Category = () => {

    const { mode } = useContext(ThemeContext)

    const pageName = usePageName();
    const breadcrumbs = <div className="breadcrumbs text-lg">
        <ul>
            <li><Link className={`hover:cursor-none ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`} to='/'>Home</Link></li>
            <li><Link className={`hover:cursor-none ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`} to='/categories'>Categories</Link></li>
            <li>{pageName}</li>
        </ul>
    </div>

    const paginationOptions = [3, 6, 9]
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [productsData, setProductsData] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/products/${pageName}?quantity=${itemsPerPage}&currentPage=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
                setTotalPage(Math.ceil((data.count) / itemsPerPage))
                setIsLoading(false)
            })
    }, [pageName, itemsPerPage, currentPage])

    return (
        <div>
            <PageHeadline pageName={pageName} breadcrumbs={breadcrumbs}></PageHeadline>
            {
                isLoading ?
                    <Loading></Loading>
                    :
                    productsData?.products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
            <Pagination
                options={paginationOptions}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
            ></Pagination>
        </div>
    );
};

export default Category;