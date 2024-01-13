import React from 'react'
import women from '../assets/woman.png'
import logo from '../assets/logo1.png'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className=''>
          <div className=' px-5 md:px-14 py-10'>
        <div className='flex justify-between'>
         <Link to='/'>
       <img src={logo} className='w-[110px]'  alt="" />
       </Link>
    <div className='flex gap-3 md:gap-5'>
       <Link to='/register' className='bg-[#D92A9D] md:text-base text-[8px] uppercase md:px-7 px-3 mt-6 rounded-lg py-2 font-semibold text-white'>Se connecter</Link>
       <button className='bg-[#D92A9D] md:text-base text-[8px] uppercase md:px-7 px-3 mt-6 rounded-lg py-2 font-semibold text-white'>S'inscrire</button>
    </div>
        </div>
    </div>
      <div className='flex  justify-center'>
         <img src={women} width={600} alt="" />
      </div>
      <div className='text-center px-3 '>
        <h1 className='capitalize font-bold md:p-0 p-2  text-xl md:text-3xl text-white'>Trouvez votre futur(e)❤ <br /> conjoint(e) facilement <br /> avec <span>MyNisf</span></h1>
        <p className='text-gray-400 md:p-0 p-2  mt-4'>Faites les causes vous méme et Débutez vos recherches des maintenant!</p>
        <Link to='register'>
        <button className='bg-[#D92A9D] text-sm uppercase px-7 mt-6 rounded-lg py-2 font-semibold text-white'>Connectez vous maintenant!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
