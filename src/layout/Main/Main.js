import React from 'react';
import About from '../../parts/About/About';
import Banner from '../../parts/Banner/Banner';
import Contact from '../../parts/Contact/Contact';
import Projects from '../../parts/Projects/Projects';
import Skills from '../../parts/Skills/Skills';


const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Main;