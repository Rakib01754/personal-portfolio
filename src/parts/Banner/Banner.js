import React from 'react';
import bgImg from '../../assets/background.jpg'
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';

const Banner = () => {
    return (
        <div className='relative w-full h-screen bg-cover bg-center ' style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div
                className="absolute w-full h-full flex flex-col justify-center items-center backdrop-blur-sm"
            ></div>
            <div className='relative'>
                <Navbar></Navbar>
                <Content></Content>
            </div>

        </div>
    );
};

export default Banner;