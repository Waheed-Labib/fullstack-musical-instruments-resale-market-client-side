import React from 'react';
import './Navbar.css';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavAccessories from './NavAccessories';

const Navbar = () => {

    return (

        <div>
            {/* large and medium device */}
            <div className='hidden sm:grid grid-cols-3 text-base-100 h-32 text-xl p-8'>
                <NavLogo></NavLogo>
                <NavMenu></NavMenu>
                <NavAccessories></NavAccessories>
            </div>

            {/* small device */}
            <div className='sm:hidden text-base-100 h-32 text-xl flex justify-between p-8'>

                <NavLogo></NavLogo>
                <NavMenu></NavMenu>

            </div>
        </div>

    )
};

export default Navbar;