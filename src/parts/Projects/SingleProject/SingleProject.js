import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProject = ({ project }) => {
    const { shortIntro, name, picture, id, liveLink, github } = project
    return (
        <>
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={picture} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-12 font-normal text-gray-700 dark:text-gray-400"> {shortIntro} </p>
                    <div className='flex justify-between absolute inset-x-0 bottom-2 px-2'>
                        <a href={liveLink} rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-[#1073E5] border-0 py-2 items-center px-4 focus:outline-none rounded text-lg font-bold" title='Live Website'>
                            <FaExternalLinkAlt />
                        </a>
                        <Link to={`projectdetails/${id}`} className="flex text-white bg-black hover:bg-[#1073E5] border-0 py-2 px-4 focus:outline-none rounded text-lg font-bold" title='Project Details'>
                            Details
                        </Link>
                        <a href={github} rel="noreferrer" target='_blank' className="flex text-white bg-black hover:bg-[#1073E5] border-0 py-2 px-4 items-center focus:outline-none rounded text-lg font-bold" title='Github'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SingleProject;