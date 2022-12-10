import React from 'react';
import About from '../../parts/About/About';
import Banner from '../../parts/Banner/Banner';
import Projects from '../../parts/Projects/Projects';
import Skills from '../../parts/Skills/Skills';


const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Main;