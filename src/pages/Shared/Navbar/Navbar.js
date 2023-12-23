import React from 'react';
import './Navbar.css';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavAccessories from './NavAccessories';

const Navbar = () => {

    return (

        <div>
            {/* large and medium device */}
            <div className='hidden sm:grid grid-cols-3 text-base-100 h-32 p-8 text-xl'>
                <NavLogo></NavLogo>
                <NavMenu></NavMenu>
                <NavAccessories></NavAccessories>
            </div>

            {/* small device */}
            <div className='sm:hidden text-base-100 h-32 p-8 text-xl'>
                <div className='flex justify-between w-full'>
                    <NavLogo></NavLogo>
                    <NavMenu></NavMenu>
                </div>
                <NavAccessories></NavAccessories>
            </div>
        </div>

    )
};

export default Navbar;