import React from 'react'
import Navigation from '../../components/landing/Navigation'
import Bottomer from '../../components/landing/Bottomer'

function Notfound() {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
        <Navigation title="404 this page could not be found"/>
        <div className="pt-[15rem] flex items-center pb-[10rem] justify-center flex-col">
          <div className='font-bold text-4xl'>404 NOT FOUND</div>
          <div className="font-semibold text-2xl mt-7">This page could not be found or it must be published later</div>
        </div>
        <Bottomer one={true} />
    </div>
  )
}

export default Notfound 