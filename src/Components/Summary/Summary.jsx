import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Test() {
    return <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>
}

function Summary() {
    return (
        <section className='snap-start h-screen w-full bg-zinc-800 mx-auto flex flex-col text-center justify-center'>
            <div className='flex gap-16 text-center justify-center'>
                <div className='text-4xl font-bold flex flex-col justify-center'>
                    <p className=''>I am a Machine Learning Engineer</p>
                    <p className=''>Currently based in Madrid</p>
                    <p className=''>Working for Apres</p>
                </div>
                <div class="w-[320px] h-[320px] border">
                    <Test />
                </div>
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
