import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import resume from '../../../assets/Md Rakibul Hasan-MERN Stack Developer.pdf'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <h1 className='font-bold text-black text-4xl font-mono'>Rakib</h1>
                    </Link>
                    <button
                        className="text-black p-4 animate-pulse cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FaBars></FaBars>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold text-black">
                        <li className="flex">
                            <a href="#projects" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-white'>Projects</a>
                        </li>
                        <li className="flex">
                            <a href="#skills" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-white'>Skills</a>
                        </li>
                        <li className="flex">
                            <a href="#about" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-white'>About</a>
                        </li>
                        <li className="flex">
                            <a href="#contact" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-white'>Contact</a>
                        </li>
                        <li className="flex">
                            <Link to="/blogs" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-white'>Blogs</Link>
                        </li>
                        <li className="flex">
                            <a href={resume} className='flex items-center hover:bg-[#1073E5] hover:text-white outline outline-white px-4 py-2 -mb-1 mt-2 md:mt-0 border-b-2 border-transparent' download>Download Resume</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;