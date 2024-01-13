import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'


function Info3() {
  return (
    <div className='px-14 py-10'>
        <Link to='/'>
       <img src={logo}  alt="" />
       </Link>

      <div className='flex justify-center'>
      <div className='flex flex-col'>

     <p className='mt-16 text-white text-xl font-bold'>Aidez-nous à presenter vos traits de personalité.</p>
     <p className='mt-3 text-gray-300 text-lg font-bold'>Ces information seront disponible sur votre profile et visible pour les autres membres.</p>
     <h1 className='text-pink-400 text-2xl font-semibold mt-4'>Traits de Personalité</h1>

     <div className='mt-16 flex gap-2 flex-col max-w-[700px]'>
     <label className='text-white font-bold'>Traits de Personnels</label>
     <input type="text" placeholder='Ajoutez vos traits de personnels' className='outline-none p-3 rounded-md placeholder:text-gray-300 placeholder:text-sm text-white border-none bg-[#68315F] mt-3' name="" id="" />
     
     <label className='text-white mt-2 font-bold'>Quel est votre principal défaut</label>
     <input type="text" className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white mt-2 font-bold'>Que fait-vous de votre temps libre</label>
     <input type="text" placeholder='ajoutez ce que vous faites' className='outline-none p-3 placeholder:text-gray-300 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white mt-2 font-bold'>Aimez-vous voyager?</label>
     <input type="text" className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
    
     <label className='text-white mt-2 font-bold'>Quelle est votre relation avec l'argent?</label>
     <input type="text" className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white mt-2 font-bold'>Etude islamique</label>
     <input type="text" placeholder='etudiez-vous les sciences islamique?' className='outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />

     <label className='text-white mt-2 font-bold'>Avez-vous des amis du sex opposé?</label>
     <input type="text" className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
     
     <label className='text-white mt-2 font-bold'>Quelles sont vos habitudes journalleres pour essayer d'augumenter votre foi ?</label>
     <input type="text" placeholder='Vos habitudes..' className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
    
     <label className='text-white mt-2 font-bold'>Quels sont les covanis ou précheurs contempora ns que vous écoutez ?</label>
     <input type="text" placeholder='Savant ou pécheurs' className=' placeholder:text-gray-300 placeholder:text-sm outline-none p-3 rounded-md text-white border-none bg-[#68315F] mt-3' name="" id="" />
    
    
     <Link to='/info4' className='flex justify-center'>
       <button className='bg-[#D92A9D]  uppercase px-28 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
    </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Info3

