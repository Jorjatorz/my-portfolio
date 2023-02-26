import React from 'react';
import experience_data from '../../Data/experiences.json'

function ExperienceCard(props) {
    return <div className='bg-slate-700 w-[30rem] rounded-lg p-4 flex flex-col justify-evenly'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <div className='flex justify-evenly gap-4'>
            <p>{props.place}</p>
            <p className='min-w-fit'>{props.date}</p>
        </div>
        <p className='m-4 text-xl font-bold'>{props.company}</p>
        <div>
            <p>{props.skills.join(' · ')}</p>
        </div>
    </div>
}

function Experience() {
    return (
        <div className='h-fit w-full mx-auto flex flex-row text-center justify-center'>
            <ul className='flex flex-col gap-4 mt-4'>
                {experience_data.items.map((exp) =>
                    <li><ExperienceCard {...exp} /></li>)}
            </ul>
        </div>
    );
}

export default Experience;
