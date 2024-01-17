import React, { useContext } from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeProvider/ThemeProvider';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { mode } = useContext(ThemeContext);

    const { name, category, image, original_price, resale_price, years_of_use, date_posted, location, seller_name, seller_img } = product;

    return (
        <div className='flex justify-center items-center gap-[5%] w-[90%] mx-auto my-32'>
            <img className='w-2/5 h-[500px] rounded' src={image} alt={name}></img>
            <div className='w-3/5 h-[500px]'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className='text-base font-semibold'>Product Name:</td>
                                <td className={`text-lg font-semibold ${mode === 'dark' ? 'text-primary' : 'text-neutral'}`}>{name}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Product Category:</td>
                                <td>{category}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Location:</td>
                                <td className='text-lg'>{location}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Seller:</td>
                                <td>
                                    <Link className={`flex items-center gap-4 ${mode === 'dark' ? 'hover:text-primary' : 'hover:text-neutral'}`}>
                                        <img className='h-12 w-12 rounded-full' src={seller_img} alt='seller_name'></img>
                                        <p className='underline text-lg'>{seller_name}</p>
                                    </Link>

                                </td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Years of Use:</td>
                                <td>{years_of_use}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Posted on:</td>
                                <td>{date_posted}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Resale Price:</td>
                                <td className='text-lg'>{resale_price}</td>
                            </tr>

                            <tr>
                                <td className='font-semibold'>Original Price:</td>
                                <td>{original_price}</td>
                            </tr>

                            <tr>
                                <td className='w-40'>
                                    <button className={`hover:cursor-none text-base btn ${mode === 'dark' ? "btn-outline btn-primary" : "btn-secondary"}`}>
                                        <div className='flex items-center gap-1'>
                                            <MdOutlineAttachMoney></MdOutlineAttachMoney>
                                            <p>Buy Now</p>
                                        </div>
                                    </button>
                                </td>

                                <td className='flex items-center gap-12'>
                                    <button className={`hover:cursor-none text-base btn ${mode === 'dark' ? "btn-outline btn-primary" : "btn-secondary"}`}>
                                        <div className='flex items-center gap-2'>
                                            <FaShoppingCart></FaShoppingCart>
                                            <p>Add to Cart</p>
                                        </div>
                                    </button>

                                    <button className={`hover:cursor-none text-base btn ${mode === 'dark' ? "btn-outline btn-primary" : "btn-secondary"}`}>
                                        <div className='flex items-center gap-2'>
                                            <FaRegHeart></FaRegHeart>
                                            <p>Add to Wishlist</p>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;