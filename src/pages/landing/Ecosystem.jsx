import React from 'react'
import Navigation from '../../components/landing/Navigation'
import Bottomer from '../../components/landing/Bottomer'

function Ecosystem() {
  // const ecos = ["Health assessments", "Home medicine review", "Fractures and dislocation", "Desensitisation injections"]
  return (
    <div className="w-full">
      <Navigation link={'ecosystem'} title="Levitra - Ecosystem"/>
      <div className='flex pt-[6rem] justify-around'>
        <div>
          <div>
          We provide all aspects of medical practice for
          you whole family, including general check-ups 
          or assisting you with specific injuries.
          </div>
          <div>
          We'll  work with you to develop individualised
care plans, including management of
 chronic diseases. If we cannot assist,
 we can provide referrals  or advice
 about type of practitioner   
 require. We treat all enquires sensitively
 and in the strictest confidence

          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Bottomer />
    </div>
  )
}

export default Ecosystem