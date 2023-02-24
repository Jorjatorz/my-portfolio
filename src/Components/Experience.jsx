import React, { useState } from 'react';
import experience_data from '../Data/experience.json'

function ExperienceCard(props) {
    return <div className='bg-slate-700 w-[30rem] rounded-lg p-4'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <div className='flex justify-center gap-4'>
            <p>{props.place}</p>
            <p>{props.date}</p>
        </div>
        <p className='m-4 text-xl font-bold'>{props.company}</p>
        <div>
            <p>{props.skills}</p>
        </div>
    </div>
}

function Experience() {
    return (
        <div className='h-screen w-full mx-auto flex flex-row text-center justify-center'>
            <ul className='flex flex-col gap-4 mt-4'>
                {experience_data.items.map((exp) =>
                    <li><ExperienceCard {...exp} /></li>)}
            </ul>
        </div>
    );
}

export default Experience;
