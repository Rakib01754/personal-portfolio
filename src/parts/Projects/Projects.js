import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject/SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='container px-5 py-10 mx-auto' id='projects'>
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-12 text-[#6060B6] underline">Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                }

            </div>

        </div>
    );
};

export default Projects;