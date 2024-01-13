import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'


function Information() {
  return (
    <div className='px-14 py-10'>
           <Link to='/'>
       <img src={logo}  alt="" />
    </Link>
      <div className='flex justify-center'>
      <div className='flex flex-col'>

     <p className='mt-16 text-white text-xl font-bold'>Aidez-nous a presenter vos information.</p>
     <p className='mt-3 text-gray-300 text-lg font-bold'>Ces information seront disponible sur votre profile et visible pour les autres membres.</p>
     
     <div className='mt-16 flex flex-col overflow-hidden w-[530px]'>
     <label className='text-white font-bold'>Pseudo (pas modifiable)</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
      
      <div className='flex mt-3 gap-3'>
       <div className='flex flex-col'>
     <label className='text-white font-bold'>Nationalitè</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>

       <div className='flex flex-col'>
     <label className='text-white font-bold'>Origine</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>
     <label className='text-white mt-3 font-bold'>Autre Origine</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
     <label className='text-white mt-3 font-bold'>Télèphone (vu que par l'admine)</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
     
     <Link to='/info'>
       <button className='bg-[#D92A9D] w-full  uppercase px-3 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
    </Link>
     </div>
     </div> 
     </div> 
    </div>
  )
}

export default Information
