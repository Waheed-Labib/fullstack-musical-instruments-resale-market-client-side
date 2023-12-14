import React, { useContext } from 'react';
import './Footer.css'
import { ThemeContext } from '../../../contexts/ThemeProvider/ThemeProvider';
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const { mode } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer h-[460px]'>
            <div className={`footer-content footer-content-${mode}-mode h-[460px] w-full flex flex-col gap-16 items-center justify-center`}>
                <h2 className='text-center text-5xl font-medium'>FOLLOW US ON SOCIAL MEDIA</h2>
                <div className='flex gap-12 text-lg'>

                    <Link className={`social-link social-link-${mode}-mode`}>
                        <FaFacebookF></FaFacebookF>
                    </Link>

                    <Link className={`social-link social-link-${mode}-mode`}>
                        <FaPinterest></FaPinterest>
                    </Link>

                    <Link className={`social-link social-link-${mode}-mode`}>
                        <FaInstagram></FaInstagram>
                    </Link>

                </div>

                <div className='flex gap-1 items-center text-lg mt-2'>
                    <FaRegCopyright></FaRegCopyright>
                    <p>{currentYear} All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;