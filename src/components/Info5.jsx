import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import { FaCamera } from "react-icons/fa";

function Info5() {
  return (
    <div className='px-14 py-10'>
         <Link to='/'>
       <img src={logo}  alt="" />
    </Link>
     <div className='flex justify-center'>
     <div className='flex flex-col'>
   <p className='mt-16  md:text-center  text-white text-xl font-bold'>Aidez-nous a comprendre votre profile privé.</p>
   <p className='mt-3  md:text-center  text-gray-300 text-lg font-bold'>Ces information seront disponible sur votre profile et visible pour les autres membres.</p>
   <h1 className='text-pink-400   md:text-center text-2xl font-semibold mt-4'>Creation Profile Privé</h1>
   <h1 className='mt-6 text-white  md:text-center  text-lg font-semibold'>Prendre un selfie</h1>
    
      <div className='flex justify-center'>
    <div className='bg-gradient-to-b cursor-pointer mt-3 rounded-lg py-3 flex gap-2 justify-center px-7 items-center w-[250px] from-[#fff] to-[#E4E5E9]'>
      <FaCamera className='text-pink-400'/>
      <p className='text-pink-400 font-semibold '>Take a Selfie</p>     
    </div> 
     </div>
    <div className='mt-5 max-w-[700px] flex flex-col'>
         <label className='text-white font-semibold' htmlFor="">Votre Description</label>
         <textarea name="" className='outline-none p-3 placeholder:text-gray-300 rounded-md text-white border-none bg-[#68315F] mt-3' placeholder='Je suis une personne qui...' id="" cols="30" rows="6"></textarea>
         <label className='text-white font-semibold' htmlFor="">Postez un hadith</label>
         <textarea name="" className='outline-none placeholder:text-gray-300 p-3 rounded-md text-white border-none bg-[#68315F] mt-3' placeholder='Hadith...' id="" cols="30" rows="6"></textarea>
         <label className='text-white mt-3 font-semibold' htmlFor="">Est ce que tu as un maladie</label>
         <select className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="">
            <option value='yes' className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3'>Yes</option>
            <option value='no' className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3'>No</option>
         </select>

         <label className='text-white mt-3 font-semibold' htmlFor="">Quel salaire gagnez-vous</label>
         <textarea name="" className='outline-none placeholder:text-gray-300 p-3 rounded-md text-white border-none bg-[#68315F] mt-3' placeholder='Le salaire que je gagne est...' id="" cols="30" rows="3"></textarea>
    </div> 
    <Link to='/selfie' className='flex justify-center'>
       <button className='bg-[#D92A9D] w-[300px] hover:shadow-pink-600 duration-300 shadow  uppercase px-3 mt-6 rounded-lg py-2 font-semibold text-white'>Créer</button>
    </Link>
    </div>
    </div>
    </div>
  )
}

export default Info5
