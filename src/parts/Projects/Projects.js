import React from 'react';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

const Projects = () => {
    return (
        <div className='container px-5 py-10 mx-auto'>
            <div className="flex flex-col text-center w-full mb-4">
                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900 underline">Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div class="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={project1} alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Capture Point</h5>
                        <p class="mb-12 font-normal text-gray-700 dark:text-gray-400"> This website is about used products to buy and sell.  Sellers can add products, buyers can buy products and the admin can handle sellers and buyers.  On this website has user authentication, JWT verification, payment, and a special admin role. </p>
                        <div className='flex justify-between absolute inset-x-0 bottom-2 px-2'>
                            <a href="https://instant-camera-ff73c.web.app/" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                Live Site
                            </a>
                            <a href="https://github.com/Rakib01754/instant-camera-client" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={project2} alt="" />

                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Packers & Movers</h5>
                        <p class="mb-12 font-normal text-gray-700 dark:text-gray-400"> This website is about service and review. Users can add, edit and delete their own reviews.  On this website has user authentication, JWT verification, private route, and dynamic route. </p>
                        <div className='flex justify-between absolute inset-x-0 bottom-2 px-2'>
                            <a href="https://packers-movers-b086e.web.app/" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                Live Site
                            </a>
                            <a href="https://github.com/Rakib01754/packers-movers-public-repo" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div class="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={project3} alt="" />

                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E Coding</h5>
                        <p class="mb-12 font-normal text-gray-700 dark:text-gray-400"> This website is a programming learning course.  Users can see the course description and download a pdf about this description. On this website has user authentication, private route, and dynamic route. </p>
                        <div className='flex justify-between absolute inset-x-0 bottom-2 px-2'>
                            <a href="https://e-coding-26299.web.app/" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                Live Site
                            </a>
                            <a href="https://github.com/Rakib01754/e-coding-client" rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-orange-600 border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;