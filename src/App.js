import React from 'react'
import Home from './components/Home'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Input from './components/Input'
import Payment from './components/Payment'
import Information from './components/Information'
import Info2 from './components/Info2'
import Info3 from './components/Info3'
import Info4 from './components/Info4'
import Info5 from './components/Info5'
import Selfie from './components/Selfie'

function App() {
  return (
        <div className='bg-gradient-to-b from-[#581B5B] to-[#925084]  h-full w-full'>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='input' element={<Input/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='information' element={<Information/>}/>
        <Route path='info' element={<Info2/>}/>
        <Route path='infor' element={<Info3/>}/>
        <Route path='info4' element={<Info4/>}/>
        <Route path='info5' element={<Info5/>}/>
        <Route path='selfie' element={<Selfie/>}/>
      </Routes>    
    </div>
  )
}

export default App
