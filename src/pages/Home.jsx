import React from 'react'
import HouseImage from '../assets/icons/leaf-logo.png';

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='h-screen w-screen bg-[url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] flex justify-center items-center bg-no-repeat bg-center bg-cover'>
      <div className='py-5 px-10 flex flex-col justify-center  items-center'>
            <img src={HouseImage} alt='leaf logo' className='block mx-auto w-12 h-10' />  
            <h1 className='text-white font-bold text-4xl my-2 shadow-xl'>FRESH TRACK</h1>
            <p className='text-white text-xs font-medium mb-5 shadow-md'>Track your food, reduce your waste</p>
            <Link to="/Home2">
            <button className='rounded-md bg-primary p-2 text-xs text-white'>Get Started</button>
      </Link>
            
        </div>
    </div>
  )
}

export default Home
