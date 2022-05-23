import React from 'react'
import Navigation from '../../components/landing/Navigation'
import Bottomer from '../../components/landing/Bottomer'
import LeftDoctor from '../../icons/LeftDoctor'
import Approval from '../../icons/Approval'
function Ecosystem() {
  const ecos = ["Health assessments", "Home medicine review", "Fractures and dislocation", "Desensitisation injections"]
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
          and in the strictest confidence.
          </div>
        </div>
        <div>
          <h2>Caring for the health and well being of you and your family</h2>
          <h1>We Strive To Provide You &amp; Your Family With The Best Medical</h1>
          <LeftDoctor />
        </div>
        <div>
          <div>
          We're here to care for you and
          your entire family. Regular visits
          to the doctor will depend on your
          age and general health!
         </div>
         <div>
           {ecos.map((eco, index)=>(
             <div className='flex gap-2 items-center'>
               <Approval />
               <div>{eco}</div>
             </div>
           ))}
         </div>
        </div>
      </div>
      <Bottomer />
    </div>
  )
}

export default Ecosystem