import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'

function Input() {
  return (
    <div className='px-14 py-10'>
          <Link to='/'>
       <img src={logo}  alt="" />
    </Link>
     <div className='flex justify-center'>
     <div className='flex flex-col'>
     <p className='mt-16 text-white text-xl font-bold'>Bienvenue sur l'application MyNisf, <br />connectez a votre compte. </p>
    
    <div className='mt-16 flex flex-col max-w-[300px]'>
     <label className='text-white font-bold'>Pseudo</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
     
     <label className='text-white font-bold'>Email</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white font-bold'>Password</label>
     <input type="password" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white font-bold'>Confirm password</label>
     <input type="password" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
      <div className='flex gap-2'>
      <input type="checkbox" />
      <p className='mt-3 text-white text-sm font-bold'>oui je comprends et j'accepte les conditions general d'utilisation</p>
      </div>
     <Link to='/payment'>
       <button className='bg-[#D92A9D] w-full  uppercase px-3 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
    </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Input
