import React from 'react';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';

const Banner = () => {
    return (
        <div className='relative text-black w-full h-screen bg-[#AFD5EB]'
        >

            <div className='relative'>
                <Navbar></Navbar>
                <Content></Content>
            </div>

        </div>
    );
};

export default Banner;