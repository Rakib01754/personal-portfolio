import React from 'react';
import aboutMe from '../../assets/coding.json'
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Lottie from "lottie-react"

const About = () => {
    return (
        <div className='container mx-auto' id='about'>
            <section className="text-black body-font py-10 text-justify">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-5xl text-3xl font-medium title-font mb-12 text-black underline">About Me</h1>
                </div>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  font-mono">
                        <h1 className="font-bold sm:text-4xl text-3xl text-gray-900">Hello, I am Md Rakibul Hasan
                        </h1>
                        <p className="my-8 text-justify">From Kishoreganj district, Dhaka division, Bangladesh. I have completed Diploma in CSE in 2016. I am a curious, passionate MERN Stack developer. I am learning MERN stack web development for around one year. I can make a complete project with react, node, and MongoDB. Already I have completed a number of projects based on my skills.  I love to code with consistency and I really enjoy it. Finally, I want to be an Expert Developer in this field.</p>
                        <div className="flex justify-center items-center">
                            <a href='https://www.linkedin.com/in/rakib3302/' rel="noreferrer" target='_blank' className='text-3xl text-white bg-black hover:bg-[#1073E5] mr-3'> <FaLinkedin /> </a>
                            <a href='https://github.com/Rakib01754' rel="noreferrer" target='_blank' className='text-3xl text-white bg-black hover:bg-[#1073E5] mr-3'> <FaGithub /> </a>
                            <a href='https://www.facebook.com/rakib.3302/' rel="noreferrer" target='_blank' className='text-3xl text-white bg-black hover:bg-[#1073E5] mr-2'> <FaFacebookSquare /> </a>
                            <a href='https://twitter.com/rakib3302' rel="noreferrer" target='_blank' className='text-3xl text-white bg-black hover:bg-[#1073E5] mr-3'> <FaTwitter /> </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Lottie className='max-w-[500px]' animationData={aboutMe} loop={true} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;