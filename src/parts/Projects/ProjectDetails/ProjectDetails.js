import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Footer from '../../Footer/Footer';

const ProjectDetails = () => {
    const project = useLoaderData()
    const { name, sampleDetails, sampleOne, sampleTwo, sampleThree, sampleFour, liveLink, github } = project

    return (
        <>
            <div>
                <div className='bg-[#AFD5EB] flex p-4 items-center w-full text-white'>
                    <Link to='/'><span className='font-bold mr-14 hover:text-black'>Home</span></Link>
                    <h1 className='font-bold text-5xl'>Project</h1>
                </div>
                <div className='w-[90%] mx-auto mt-12'>
                    <h1 className='font-bold text-4xl mb-6 underline'> {name} </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#AFD5EB] p-6'>
                        <PhotoProvider>
                            <PhotoView src={sampleOne}>
                                <img src={sampleOne} className="border-2 border-white p-4 h-[300px] shadow-lg w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={sampleTwo}>
                                <img src={sampleTwo} className="border-2 border-white p-4 h-[300px] shadow-lg w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={sampleThree}>
                                <img src={sampleThree} className="border-2 border-white p-4 h-[300px] shadow-lg w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={sampleFour}>
                                <img src={sampleFour} className="border-2 border-white p-4 h-[300px] shadow-lg w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <p className='font-bold text-2xl underline mt-4'>Project Details:</p>
                    {
                        sampleDetails.map((singleDetail, idx) => <p key={idx} className='text-xl ml-4'> - {singleDetail} </p>)
                    }
                </div>
                <div className='flex gap-6 px-2 w-[90%] mx-auto mt-2'>
                    <a href={liveLink} rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-[#1073E5] border-0 py-2 items-center px-4 focus:outline-none rounded text-lg font-bold" title='Live Website'>
                        Live Site
                    </a>
                    <a href={github} rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-[#1073E5] border-0 py-2 px-4 items-center focus:outline-none rounded text-lg font-bold" title='Github'>
                        Github
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProjectDetails;