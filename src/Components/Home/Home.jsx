import React from 'react';

import { BiChevronsDown } from 'react-icons/bi'

function Home() {
    return (
        <section className='relative snap-center h-screen w-full bg-zinc-900 mx-auto text-center flex flex-col justify-center'>
            <p className='text-2xl'>Welcome to my portfolio</p>
            <h1 className='text-7xl font-bol mt-5'>Jorge Sánchez Cremades</h1>
            <div className='text-xl mt-10 font-bold flex space-x-4 justify-center'>
                <p className='bg-gray-700 p-2 rounded-md'>Machine Learning Engineer</p>
                <p className='bg-gray-700 p-2 rounded-md'>Currently based in Madrid</p>
            </div>
            <div className='absolute bottom-16 left-1/2 animate-pulse -translate-x-1/2 flex flex-col items-center'>
                Scroll down
                <BiChevronsDown />
            </div>
        </section>
    );
}

export default Home;
