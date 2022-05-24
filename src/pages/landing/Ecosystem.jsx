import React from 'react'
import Navigation from '../../components/landing/Navigation'
import Bottomer from '../../components/landing/Bottomer'
import LeftDoctor from '../../icons/LeftDoctor'
import Approval from '../../icons/Approval'
import MaleDoctor from '../../assets/male.png'

function Ecosystem() {
  const ecos = ["Health assessments", "Home medicine review", "Fractures and dislocation", "Desensitisation injections"];
  const downs = ["Delivering tomorrow's health care for your family", "Delivering tomorrow's health care for your family", "Delivering tomorrow's health care for your family"]
  return (
    <div className="w-full bg-[#E6EDF8]">
      <Navigation link={'ecosystem'} title="Levitra - Ecosystem"/>
      <div className='flex pt-[8rem] px-5 items-center'>
        <div className='flex flex-col gap-[3rem]'>
          <div className='font-bold text-[#163158] max-w-[28rem] text-xl'>
          We provide all aspects of medical practice for
          you whole family, including general check-ups 
          or assisting you with specific injuries.
          </div>
          <div className='text-[#163158] max-w-[30rem] text-lg'>
          We'll  work with you to develop individualised
          care plans, including management of
          chronic diseases. If we cannot assist,
          we can provide referrals  or advice
          about type of practitioner   
          require. We treat all enquires sensitively
          and in the strictest confidence.
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <h2 className='font-bold text-lg text-[#163158]'>Caring for the health and well being of you and your family</h2>
          <h1 className='text-4xl font-bold text-center text-[#053085]'>We Strive To Provide You &amp; Your Family With The Best Medical</h1>
          <LeftDoctor />
        </div>
        <div className='flex flex-col gap-[3rem]'>
          <div className='max-w-[25rem] text-[#163158] font-medium'>
          We're here to care for you and
          your entire family. Regular visits
          to the doctor will depend on your
          age and general health!
         </div>
         <div className='flex text-[#163158] flex-col gap-3'>
           {ecos.map((eco, index)=>(
             <div key={index} className='flex gap-2 items-center'>
               <Approval />
               <div className='font-bold'>{eco}</div>
             </div>
           ))}
         </div>
        </div>
      </div>
      <div className='flex w-full'>
        <div style={{background: `url(${MaleDoctor})`}} className="bg-cover bg-center bg-no-repeat w-1/2"></div>
        <div className='bg-[#080B4A] text-[#D6D5D5] flex flex-col gap-5 h-full'>
          <h1 className='font-bold text-3xl text-white'>Sets The Standard For Outstanding High QualityCareAnd Patient Safety!!</h1> 4
          <h2>
            Our doctors include highly qualified male and female practitioners
            who come from a range of backgrounds and bring with a diversity
            of skills and special  interests.
          </h2>
          <h2>
            Our adminstration and support staff all have exceptional people
            skills and trained to assist you with all medical enquires.
          </h2>
          <div>
            {downs.map((down, index)=>(
              <div key={index} className='flex items-center gap-2'>
                <Approval />
                <div>{down}</div>
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