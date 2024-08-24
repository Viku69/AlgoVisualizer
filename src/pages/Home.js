import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>

            <nav className='flex flex-wrap flex-row justify-between p-5 mx-5 rounded-sm my-auto bg-yellow-400 '>
                <div className='flex  justify-center items-center '>
                    <Link to="/">
                        <p className='text-xl'>AlgoVisualizer</p>
                    </Link>
                </div>

                <ul className='flex flex-wrap justify-center items-center gap-8'>
                    <li className='text-lg  hover:underline hover:decoration-4  '>
                        <Link to="/pathFinder">Path Finder</Link>
                    </li>
                    <li className='text-lg hover:underline hover:decoration-4  '>
                        <Link to="/sorting">Sorting</Link>
                    </li>
                    <li className='text-lg hover:underline hover:decoration-4  '>
                        <Link to="/searching">Searching</Link>
                    </li>

                </ul>

            </nav>

            <div className='flex gap-5 py-1 m-5'>
                <div className='w-5/6 h-[80vh]  border-2 border-yellow-400 rounded-3xl flex  justify-between gap-5 px-5 py-16 bg-white relative'>
                    <div className='w-1/12  border-2 border-black  rounded-3xl  bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100'>
                    </div>
                    <div className='flex flex-wrap flex-col gap-y-10 '>
                        <h1 className='text-8xl text-yellow-500 '>Hello !</h1>
                        <h1 className='text-5xl text-yellow-500' > Welcome to AlgoVisualizer</h1>
                        <h2 className='text-2xl text-black'>Our interactive platform allows you to visually experience how various algorithms work in real-time. </h2>
                        <h2 className='text-2xl text-black'>Whether you're a student, educator, or developer, AlgoVisualizer is designed to make learning algorithms engaging and accessible.</h2>
                    </div>
                </div>

                <div className='w-5/6 h-[80vh]  border-2 border-black rounded-3xl flex justify-center items-center flex-col   px-10 py-16 bg-white'>
                    <div className='flex flex-wrap flex-col gap-y-10 '>
                        <div className='flex justify-center items-center w-[40vw] h-[15vh] bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400 rounded-lg hover:transition hover:delay-100 hover:duration-300 hover:ease-in-out'>
                            <h1 className='text-xl'>PathFinder</h1>
                        </div>
                        <div className='flex justify-center items-center w-[40vw] h-[15vh] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 rounded-lg'>
                            <h1 className='text-xl'>Sorting</h1>
                        </div>
                        <div className='flex justify-center items-center w-[40vw] h-[15vh] bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-100 rounded-lg'>
                            <h1 className='text-xl'>Searching</h1>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home