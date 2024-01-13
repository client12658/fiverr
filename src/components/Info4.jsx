import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'


function Info4() {
  return (
    <div className='px-14 py-10'>
     <Link to='/'>
       <img src={logo}  alt="" />
    </Link>
   <div className='flex justify-center'>
   <div className='flex flex-col'>
   <p className='mt-16 text-white text-xl font-bold'>Aidez-nous à mieux comprendre ce que vos recherchez.</p>
   <p className='mt-3 text-gray-300 text-lg font-bold'>Ces information seront disponible sur votre profile et visible pour les autres membres.</p>
   <h1 className='text-pink-400 text-2xl font-semibold mt-4'>Ce Que Vos Recherchez</h1>
    
   <div className='mt-16 flex flex-col max-w-[700px]'>
     <div className='md:flex  mt-3 gap-3'>
       <div className='flex flex-col'>  

     <label className='text-white  font-bold'>Age Minimum</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
       <div className='flex flex-col'>
     <label className='text-white font-bold'>Age Maximum</label>
     <input type="text" className=' outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
        </div>
      </div>


     <label className='text-white mt-3 font-bold'>Lieu de résidence</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
     
     <label className='text-white mt-3 font-bold'>Nationalité</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
    
     <label className='text-white mt-3 font-bold'>Origine</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    

     <label className='text-white mt-3 font-bold'>Situation Professionelle</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    

     <label className='text-white mt-3 font-bold'>Situation Familiale</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    

     <label className='text-white mt-3 font-bold'>Hébergement</label>
     <input type="number" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    


    <label className='text-white mt-3 font-bold'>Souhaite faire la hijra</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
    
     <label className='text-white mt-3 font-bold'>Silhoutte</label>
     <input type="text" className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />    
     
     <label className='text-white mt-3 font-bold'>Description de ce que vous reherchez</label>
     <textarea className='outline-none p-3 rounded-md text-white border-none placeholder:text-gray-300 bg-[#68315F] mt-3' placeholder='En quelques mot décriver ce que vous rechrcher' name="" id="" cols="30" rows="4">fsgsdsflisfdi</textarea>
     
     <Link to='/info5' className='flex justify-center'>
       <button className='bg-[#D92A9D] hover:shadow-pink-600 duration-300 shadow   uppercase px-28 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
    </Link>
     </div> 

     </div>
    </div>
    </div>
  )
}

export default Info4
