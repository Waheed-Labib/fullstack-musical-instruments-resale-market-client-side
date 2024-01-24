import React, { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';
import ModeToggleOption from './ModeToggleOption';

const SmallerDeviceNavMenu = () => {
    const { mode } = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const [viewCatalog, setViewCatalog] = useState(false)
    const [viewDashboard, setViewDashboard] = useState(false)

    const menu = <>
        <div className='w-full flex justify-between items-center p-3'>
            <div className={`menubar-option-${mode}-mode`}>
                <ModeToggleOption></ModeToggleOption>
            </div>

            <p onClick={() => setMenuOpen(false)} className={`menubar-option-${mode}-mode `}>x</p>
        </div>

        <hr></hr>

        <div className={`menubar-option-${mode}-mode  p-3`}>
            <Link to='/'>Home</Link>
        </div>

        <hr></hr>

        <div onClick={() => setViewDashboard(true)} className={`menubar-option-${mode}-mode  p-3 flex justify-between items-center`}>
            <p>Dashboard</p>
            <FaAngleRight></FaAngleRight>
        </div>

        <hr></hr>

        <div onClick={() => setViewCatalog(true)} className={`menubar-option-${mode}-mode  p-3 flex justify-between items-center`}>
            <p>Catalog</p>
            <FaAngleRight></FaAngleRight>
        </div>

        <hr></hr>

        <div className={` menubar-option-${mode}-mode p-3`}>
            <Link to='/blog'>Blog</Link>
        </div>
    </>

    const catalog = <>
        <div className='w-full flex justify-between items-center p-3'>
            <div onClick={() => setViewCatalog(false)} className={`menubar-option-${mode}-mode`}>
                <FaAngleLeft></FaAngleLeft>
            </div>

            <p onClick={() => setMenuOpen(false)} className={`menubar-option-${mode}-mode `}>x</p>
        </div>

        <p className={`bg-primary text-black font-semibold p-3 my-2`}>Catalog</p>

        <Link to='/login'>
            <p className={`menubar-option-${mode}-mode  p-3`}>Login</p>
        </Link>

        <hr className='border-[grey]'></hr>

        <Link to='/create-account'>
            <p className={`menubar-option-${mode}-mode  p-3`}>Create Account</p>
        </Link>
    </>

    const dashboard = <>
        <div className='w-full flex justify-between items-center p-3'>
            <div onClick={() => setViewDashboard(false)} className={`menubar-option-${mode}-mode`}>
                <FaAngleLeft></FaAngleLeft>
            </div>
            <p onClick={() => setMenuOpen(false)} className={`menubar-option-${mode}-mode `}>x</p>
        </div>

        <p className={`bg-primary text-black font-semibold p-3 my-2`}>Dashboard</p>

        <Link to='/login'>
            <p className={`menubar-option-${mode}-mode  p-3`}>Login</p>
        </Link>

        <hr className='border-[grey]'></hr>

        <Link to='/create-account'>
            <p className={`menubar-option-${mode}-mode  p-3`}>Create Account</p>
        </Link>
    </>

    return (
        <div className='lg:hidden mt-5'>
            <div onClick={() => setMenuOpen(!menuOpen)} className={`flex items-center gap-2  menubar-open-btn-${mode}-mode`}>
                {
                    menuOpen ?
                        <CiMenuFries></CiMenuFries>
                        :
                        <MdMenu></MdMenu>
                }

                <p className='hidden sm:block'>Menu</p>
            </div>
            {
                menuOpen &&
                <div onClick={() => setMenuOpen(false)} className='medium-and-small-device-menubar fixed top-0 right-0 w-full text-accent h-screen z-20 flex justify-end'>

                    <div onClick={e => e.stopPropagation()} className='w-3/5 md:w-1/3 bg-base-100 h-screen'>
                        {
                            viewCatalog &&
                            catalog
                        }
                        {
                            viewDashboard &&
                            dashboard
                        }
                        {
                            !viewCatalog && !viewDashboard &&
                            menu
                        }
                    </div>

                </div>
            }
        </div>

    );
};

export default SmallerDeviceNavMenu;