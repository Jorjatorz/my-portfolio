import React from 'react';
import projects_data from '../Data/projects.json'

function ProjectsCard(props) {
    return <div className='bg-slate-700 w-[30rem] rounded-lg p-4'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <a href={props.link} target="_blank">{props.link}</a>
        <p className='m-4 whitespace-pre-line'>{props.description}</p>
        <div>
            <p>{props.technologies.join(' · ')}</p>
        </div>
    </div>
}

function Projects() {
    return (
        <div className='h-fit w-full mx-auto flex flex-row text-center justify-center'>
            <ul className='flex flex-col gap-4 mt-4'>
                {projects_data.items.map((exp) =>
                    <li><ProjectsCard {...exp} /></li>)}
            </ul>
        </div>
    );
}

export default Projects;
