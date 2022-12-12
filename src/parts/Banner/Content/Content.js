import React from 'react';
import profile from '../../../assets/profile.png'
import { Typewriter } from 'react-simple-typewriter'


const Content = () => {
    return (
        <div className='container mx-auto text-center mt-20'>
            <div className='flex justify-center'><img className="w-48 h-48 rounded-full" src={profile} alt="rakib"></img></div>
            <h1 className='font-bold text-3xl md:text-6xl font-mono mt-2'>Hi, I'm Rakib</h1>
            <h4 className='font-bold text-2xl md:text-4xl'>
                <Typewriter
                    words={['MERN Stack Developer', 'Front End Developer', 'React Developer']}
                    loop={10}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={1000}
                />
            </h4>


        </div>
    );
};

export default Content;