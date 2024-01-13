import React from 'react'
import logo from '../assets/logo1.png'
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='px-14 py-10'>
      <Link to='/'>
      <IoIosArrowBack className="text-white cursor-pointer" size={35} />
      </Link>

      <Link to='/'>
       <img src={logo}  alt="" />
    </Link>

          <div className='flex justify-center'>
            <div className='flex flex-col'>
      <div className='mt-28'>
        <p className='text-white text-xl'>Pour continuer l'inscription sur MyNisf merci de preciser votre sexe.</p>
        <p className='text-gray-300 mt-6'>Faites les causes sur MyNisf!</p>
      </div>
      <div className='mt-7 rounded-xl  bg-[#925084] md:w-[500px] w-full h-full p-5'>
       <p className='text-white font-semibold '>choisissez votre sexe</p>

       <div className='flex justify-center gap-6'>
        <div className='bg-[#68315F] mt-5 rounded-xl p-3'>
         <div className='flex justify-center gap-6'>
        <div className='flex flex-col'>
        <div className='bg-[#4e2242]  cursor-pointer rounded-full text-white p-2 md:p-5'>
           <BsGenderMale size={35} />
        </div> 
           <p className='text-white'>Homme</p>
        </div>
        </div>
       </div>

        <div className='bg-[#68315F] mt-5 rounded-xl p-3'>
         <div className='flex justify-center gap-6'>

        <div className='flex flex-col'>
        <div className='bg-[#4e2242] flex justify-center cursor-pointer rounded-full text-white p-2 md:p-5'>
           <BsGenderFemale size={35} />
        </div> 
           <p className='text-white'>Femme</p>
        </div>
        </div>
       </div>
       </div>
       <Link className='flex justify-center' to='/input'>
       <button className='bg-[#D92A9D]  uppercase px-7 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
       </Link>
       


      </div>
      </div>
      </div> 
    
    </div>
  )
}

export default Register
