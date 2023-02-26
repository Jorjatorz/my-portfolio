import React from 'react';

function Summary() {
    return (
        <section className='h-screen w-full bg-zinc-800 mx-auto flex flex-col text-center justify-center'>
            <div className='flex gap-16 text-center justify-center'>
                <div className='text-4xl font-bold flex flex-col justify-center'>
                    <p className=''>I am a Machine Learning Engineer</p>
                    <p className=''>Currently based in Madrid</p>
                    <p className=''>Working for Apres</p>
                </div>
                <img class="w-128 h-128" src="https://unsplash.it/400/400" />
            </div>
            <p className='text-sm m-16'>Hello! I am a Software engineer with focus on Machine Learning and with experience in consulting.
                I mainly enjoy the development of algorithms to solve new and complex problems, optimising code, designing software,
                implementing AI models and creating any kind of rendering through computer.
                Currently I want to keep developing software code but I am transitioning to more management and strategic positions.
                My ultimate goal is to create my own company albeit I haven't found yet a business idea that gives value,
                is scalable and that passions me. Meanwhile I create small digital projects (alone or with friends)
                that provide some value to the user.</p>
        </section>
    );
}

export default Summary;
