import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'


function Info2() {
  return (
    <div className='px-14 py-10'>
      <Link to='/'>
       <img src={logo}  alt="" />
      </Link>
      <div className='flex justify-center'>
      <div className='flex flex-col'>
     <p className='mt-16 text-white text-xl font-bold'>Aidez-nous a presenter vos correctement.</p>
     <p className='mt-3 text-gray-300 text-lg font-bold'>Ces information seront disponible sur votre profile et visible pour les autres membres.</p>
     <h1 className='text-pink-400 text-2xl font-semibold mt-4'>Presentation</h1>
      
     <div className='mt-16 flex flex-col md:w-[420px] w-[220px]'>
     <div className='md:flex  mt-3 gap-3'>
       <div className='flex flex-col'>
     <label className='text-white  font-bold'>Ville</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>

       <div className='flex flex-col'>
     <label className='text-white font-bold'>Region</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>

     <div className='md:flex mt-3 gap-3'>
       <div className='flex flex-col'>
     <label className='text-white font-bold'>Niveau d'études</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>

       <div className='flex flex-col'>
     <label className='text-white font-bold'>Profession</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>

     <label className='text-white mt-3 font-bold'>Situation Familial</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
     <label className='text-white mt-3 font-bold'>Avez-vous des enfant</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
    
     <div className='md:flex mt-3 gap-3'>
       <div className='flex flex-col'>
     <label className='text-white font-bold'>Hébergement</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>

       <div className='flex flex-col'>
     <label className='text-white font-bold'>Fumez-vous</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>

      <div className='md:flex mt-3 gap-3'>
       <div className='flex flex-col'>
     <label className='text-white font-bold'>Votre taille en cm</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>

       <div className='flex flex-col'>
     <label className='text-white font-bold'>Votre silhouette</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>

      <label className='text-white mt-3 font-bold'>Parlez-vous l'arabe</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
    
     <Link to='/infor'>
       <button className='bg-[#D92A9D] w-full  uppercase px-3 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
    </Link>
     </div> 
     </div>  
     </div>
    </div>
  )
}

export default Info2
