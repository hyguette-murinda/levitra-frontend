import React, { useState, useEffect } from 'react'
import Logo from '../assets/favicon.png'
import './styles.css'

function Landing() {
  const [load, setLoad] = useState(false);
  const [rot, setRot] = useState(false)
useEffect(()=>{
  setLoad(true);
  setTimeout(()=>{
    setRot(true)
  },1000) 
},[])
  
  return (
    <div style={{zIndex: 50}} className={`flex items-center bg-white justify-center fixed h-[100vh] w-full`}>
        <div id="dur" className={`flex items-center relative gap-3 ${!rot && `overflow-hidden`} duration-1000 ${load ? "w-[11rem]" : 'w-[3rem]'}`}><img src={Logo} alt="logo" className={`h-[3rem] ${rot && 'spin'}`}/><div className='text-3xl font-bold text-[#1a489d]'>Levitra</div></div>
    </div>
  )
}

export default Landing