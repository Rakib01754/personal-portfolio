import React from 'react';
import About from '../../parts/About/About';
import Banner from '../../parts/Banner/Banner';
import Skills from '../../parts/Skills/Skills';


const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Main;