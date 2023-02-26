import React from 'react';

function Home() {
    return (
        <section className='h-screen w-full bg-zinc-900 mx-auto text-center flex flex-col justify-center'>
            <p className='text-2xl'>Welcome to my portfolio</p>
            <h1 className='text-7xl font-bol mt-5'>Jorge Sánchez Cremades</h1>
            <div className='text-xl mt-10 font-bold flex space-x-4 justify-center'>
                <p className='bg-gray-700 p-2 rounded-md'>Machine Learning Engineer</p>
                <p className='bg-gray-700 p-2 rounded-md'>Currently based in Madrid</p>
            </div>
        </section>
    );
}

export default Home;
