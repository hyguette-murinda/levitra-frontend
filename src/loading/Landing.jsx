import React, { useState } from 'react'
import Logo from '../assets/favicon.png'

function Landing() {
  const [load, setLoad] = useState(false)
  setTimeout(() => {
    setLoad(true);
  }, 100)

  return (
    <div style={{ zIndex: 50 }} className={`flex items-center bg-white justify-center fixed h-[100vh] w-full`}>
      <div className={`flex items-center gap-3 overflow-hidden duration-1000 ${load ? "w-[11rem]" : 'w-[3rem]'}`}><img src={Logo} alt="logo" className={`h-[3rem] `} /><div className='text-3xl font-bold text-[#1a489d]'>Levitra</div></div>
    </div>
  )
}

export default Landing