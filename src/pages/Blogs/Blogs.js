import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className='bg-[#AFD5EB] flex p-4 items-center w-full text-white'>
                <Link to='/'><span className='font-bold mr-14 hover:text-black'>Home</span></Link>
                <h1 className='font-bold text-5xl'>Blogs</h1>
            </div>
            <div className='container mx-auto text-center'>
                <h1 className='font-bold text-2xl md:text-6xl h-screen flex justify-center items-center '>Coming Soon........</h1>
            </div>
        </div>
    );
};

export default Blogs;