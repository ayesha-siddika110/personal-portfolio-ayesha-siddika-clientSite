
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import cvpdf from '../../assets/cv.pdf'
import '../../Pages/Home/About/About'
import { useState } from 'react';

const Navbar = () => {
   
    const links =<>
    <Link to="/"><a href='#'>Home</a></Link> |
    <a href='#about'  >About</a> |
    <a href='#skills' >Skills</a> |
    <a href='#projects'>Projects</a> |
    <a href='#contact' >Contact</a>
    
    </>
    return (
        <div className='shadowBottom bg-[#09062e] text-white'  >

            <div className="navbar flex justify-between w-[90%] m-auto h-[70px]">


                <div className='navbar-start'>
                <p className='text-2xl uppercase font-semibold'>Ayesha S.</p>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6 text-[14.5px]">
                        {links}
                    </ul>

                </div>
                <div className="navbar-end hidden lg:flex">
                <a href={cvpdf} target='_black'><button className="hover:bg-indigo-500 border border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 rounded-lg px-4 ">Download CV</button></a>
            </div>

                <div className="navbar-end drawer drawer-end lg:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button "><div tabIndex={0} role="button" className="  btn btn-ghost lg:hidden" htmlFor="my-drawer-4">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            </div></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu   border-2 border-indigo-700 shadow-sm mt-[64px] shadow-indigo-500 text-base-content  w-80 p-4" style={{
                            background: 'rgba( 255, 255, 255, 0.6)',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: 'blur( 4.5px )',
                            webkitBackdropFilter: 'blur( 4.5px )',
                            borderRadius: '10px',
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                        }}>
                            {/* Sidebar content here */}
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;