import React from 'react';
import { FaBars } from "react-icons/fa";
import resume from '../../../assets/Md Rakibul Hasan-MERN Stack Developer.pdf'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <h1 className='font-bold text-white text-4xl font-mono'>Rakib</h1>
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold text-white">
                        <li className="flex">
                            <a href="#projects" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-[#F25B9D]'>Projects</a>
                        </li>
                        <li className="flex">
                            <a href="#skills" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-[#F25B9D]'>Skills</a>
                        </li>
                        <li className="flex">
                            <a href="#about" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-[#F25B9D]'>About</a>
                        </li>
                        <li className="flex">
                            <a href="#contact" className='flex items-center px-4 py-2 -mb-1 border-b-2 border-transparent hover:text-[#F25B9D]'>Contact</a>
                        </li>
                        <li className="flex">
                            <a href={resume} className='flex items-center border-2 border-white hover:bg-[#F25B9D] px-4 py-2 -mb-1 mt-2 md:mt-0 border-b-2 border-transparent' download>Download Resume</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;