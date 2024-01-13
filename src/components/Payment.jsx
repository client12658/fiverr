import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import women from '../assets/woman.png'
import { FaCheck } from "react-icons/fa";

function Payment() {
  return (
        <div className='flex justify-center'>
    <div className='px-14 w-[x] py-10'>
    <Link className='flex  gap-5' to='/input'>
      <IoIosArrowBack className="text-white cursor-pointer" size={35} />
      <p className='text-white text-xl font-bold'>Abonnement</p>
    </Link>


    <p className='text-white text-2xl mt-12 font-bold'>Trouvez sa moitie(e) <br /> <span className='text-[#DB2CA0]'>InchAllah.</span> </p>
    <p className='text-gray-300 mt-4 max-w-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ex laboriosam aliquid voluptatum doloremque ipsum consequatur sed!</p>
     
     <div className='bg-[#4e2242] rounded-xl mt-9 p-5'>
     <div className='flex  justify-center'>
         <img src={women} width={600} alt="" />
      </div>
      <div className='text-center text-white'>
        <p className='text-xl font-bold'>Accès illimitè aux profils des membres</p>
        <div className='flex justify-center'>
        <p className='text-gray-300 max-w-xl mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident officiis neque tenetur est eum iure? Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, molestias expedita! Pariatur, eaque est!</p>      
        </div>
      </div>
     </div>

     <div>
        <p className='mt-8 text-white text-2xl font-bold '>Abonnez vous a notre <span className='text-[#DB2CA0]'>forfait</span></p>
        <p className='mt-2 text-gray-300 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime fugiat corporis beatae consequuntur.</p>
     </div>

     <div className='bg-purple-900 mt-5 p-5 rounded-xl text-white'>
        <p className='text-2xl text-center font-semibold'>69€/<span className='text-lg  text-[#DB2CA0]'>6months</span> <span className='border-l-2 border-gray-300'></span><span className='ml-3 text-lg'>Premium Package</span></p>
        <div className='flex justify-center'>
        <p  className='mt-6 max-w-xl text-gray-300 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quisquam eaque harum. Quisquam, blanditiis magni? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi impedit iusto consequuntur nulla quos? Nihil!</p>
        </div>
        <hr className='text-gray-500 mt-5'/>
        <div className='mt-5 '>
            <div className='flex items-center justify-center gap-3'>
         <FaCheck className='text-green-400' size={20}/>
         <p>Accès illimitè aux profils des privès</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
         <FaCheck  className='text-green-400'  size={20}/>
         <p>Accès  illimitè aux profils des privès</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
         <FaCheck className='text-green-400'   size={20}/>
         <p>Accès illimitè aux profils des privès</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
         <FaCheck className='text-green-400'   size={20}/>
         <p>Accès illimitè aux profils des privès</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
         <FaCheck className='text-green-400'   size={20}/>
         <p>Accès illimitè aux profils des privès</p>
            </div>
        </div>
        <div className='flex justify-center'>
     <button className='bg-[#DB2CA0] uppercase px-7 mt-6 rounded-lg py-2 font-semibold text-white'>Payez maintenant</button>
        </div>
     </div>
     <div className='flex justify-center'>
      <Link to='/information'>
     <button className='bg-[#DB2CA0] uppercase px-7 mt-6 rounded-lg py-2 font-semibold text-white'>Suivant</button>
      </Link>
     </div>
    </div>
        </div>
  )
}

export default Payment
