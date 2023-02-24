import React, { useState } from 'react';
import Experience from './Experience';

function Perks() {

    const [perk, setPerk] = useState(0)

    return (
        <section className='h-screen w-full mx-auto flex flex-col text-center'>
            <div className='flex flex-row gap-16 text-center justify-center mt-8 text-lg font-bold'>
                <button className={`p-2 w-32 bg-[#00df9a] text-[#181c22] rounded-lg hover:bg-slate-400 ${perk === 0 ? 'scale-125' : 'scale-100'}`} onClick={() => setPerk(0)}>Experience</button>
                <button className={`p-2 w-32 bg-[#00df9a] text-[#181c22] rounded-lg hover:bg-slate-400 ${perk === 1 ? 'scale-125' : 'scale-100'}`} onClick={() => setPerk(1)}>Projects</button>
            </div>
            {perk === 0 && <Experience />}
        </section>
    );
}

export default Perks;
