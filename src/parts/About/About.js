import React from 'react';
import image from '../../assets/rakib.png'
import resume from '../../assets/Md Rakibul Hasan-MERN Stack Developer.pdf'

const About = () => {
    return (
        <div className='container mx-auto'>
            <section className="text-black body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-bold sm:text-4xl text-3xl text-gray-900">Hello, I am Md Rakibul Hasan
                        </h1>
                        <br />
                        <h4 className='text-xl font-bold mb-4'>MERN Stack Developer From Kishoreganj.</h4>
                        <p className="mb-8 leading-relaxed">I am a curious, passionate MERN Stack developer. I am learning MERN stack web development for around one year. I can make a complete project with react, node, and MongoDB. I love to code with consistency and I really enjoy it. Finally, I want to be an Expert Developer in this field.</p>
                        <div className="flex justify-center items-center">
                            <a href={resume} download>
                                <button className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">Download Resume</button></a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={image} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;