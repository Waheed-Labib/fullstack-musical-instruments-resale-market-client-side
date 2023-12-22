import React from 'react';
import { GiMusicalScore } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NavLogo = () => {
    return (
        <div>
            <Link to='/' className="flex items-center gap-1 text-3xl mt-2" >
                <GiMusicalScore></GiMusicalScore>
                <p className='ml-2 logo-text font-thin text-4xl'>Classica</p>
            </Link >
        </div>
    );
};

export default NavLogo;