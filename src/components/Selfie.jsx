import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import logo from '../assets/Selfie.png'
import { FaCamera } from 'react-icons/fa';

function Selfie() {
  return (
    <div className='px-14 py-10'>
    <Link className='items-center flex gap-6' to='/info5'>
      <IoIosArrowBack className="text-white cursor-pointer" size={35} />
      <p className='text-white text-sm md:text-xl font-bold '>Je prends une photo</p>
    </Link>
      <div className='flex mt-16 justify-center'>
        <img src={logo} className='w-[400px]' alt="" />
      </div>

      <div className='text-center mt-5'>
        <h1 className='text-white md:text-xl text-sm font-bold'>Prenez un <span className='text-pink-400'>selfie souriant</span> pour votre photo</h1>
      <div className='flex justify-center'>
        <p className='text-gray-300 mt-5 md:max-w-lg  text-center text-sm md:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quae facilis! Alias, officia eveniet at atque rerum similique!</p>
      </div>
      <div className='flex justify-center'>
      <button className='cursor-pointer mt-5 rounded-lg py-3 gap-2 flex px-11 md:px-36 items-center bg-[#CC2898]'>
      <FaCamera className='text-white'/>
      <p className='text-white font-semibold '>Take a Selfie</p>     
    </button> 
    </div>
      </div>

    

    </div>
  )
}

export default Selfie
