import React, { useContext} from 'react'
import Navigation from '../../components/landing/Navigation'
import background from '../../assets/background.png'
import Ratings from '../../icons/Ratings.jsx'
import Quotatoins from '../../icons/Quotatoins.jsx'
import Woman from '../../assets/womandoc.png'
import Bottomer from '../../components/landing/Bottomer'
import { Responsive } from '../../context/landing/Responsive'
import { lefts, follows, works, testmony } from '../../datas/Landing'
import Landing from '../../loading/Landing'
function Primarycare() {
const {width, loading} = useContext(Responsive)
  return (
    loading ? <Landing /> : 
    <div>
      <Navigation link={'primarycare'} title="Levitra - Primary Care"/>
      <div style={{backgroundImage: `url('${background}')`}} className="bg-cover h-[100vh] bg-top">
        <div className="pt-[8rem] flex flex-col justify-start gap-[2rem] h-full pl-14 max-w-[40rem]">
          <h1 className="text-[#034BD6] text-xl font-bold pb-2">We work to take care of your hearth and body</h1>
          <p className={`font-[800] ${!width ?'text-5xl' : 'text-3xl'} py-3 font-[sans Rubik]`}>Medical care for simplified everyone!</p>
          <p className="text-gray-600 mt-[2rem] text-lg max-w-[24rem] font-semibold">
             The health and well-being of our patients and their
             health care will always be our priority. So we follow 
             the best practices for cleanlliness.
          </p>
          <div className={`flex gap-5 mt-10 ${width && 'flex-col'}`}>
             {follows.map((nav, index)=>(
             <div key={index} className="bg-white w-[9rem] h-[9rem] flex items-center justify-center flex-col rounded-[10px] shadow-md drop-shadow-md">
                <div className={`${index === 0 ? "bg-[#0B7E5C]" : "bg-[#0D3176]"} flex items-center justify-center rounded-[5px] w-[4rem] h-[4rem]`}>{nav.icon}</div>
                <div className="font-bold text-lg ">{nav.h1}</div>
                <div className="font-medium">{nav.message}</div>
             </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-5xl py-4 text-center">What we care about</h1>
        <h1 style={{lineHeight: "25px"}} className="max-w-[38rem] pb-2 w-full text-[#625C5C] font-[500] font-[sans Inter] text-center text-xl">We strive to provide you and your family With the best medical And General Practice Care</h1>
        <div className={`flex items-center gap-14 ${width && 'flex-col'} justify-center mt-7`}>
          {works.map((work, index)=>(
            <div key={index} style={{boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.25)"}} className={`bg-white gap-5 min-h-[18rem] min-w-[15rem] px-5 flex items-center flex-col justify-center rounded-[10px]`}>
              <div className={`${index === 0 ? "bg-[#071854]" : `${index === 1 ? "bg-[#0B7E5C]" : "bg-[#1537AE]"}`} w-[8rem] flex items-center justify-center h-[6rem] rounded-[10px]`}>{work.icon}</div>
              <div className="font-bold text-xl">{work.h1}</div>
              <div className="w-[10rem] font-regular text-center">{work.document}</div>
            </div>
          ))}
        </div>
        <div className="border-t-[2px] my-7 border-solid border-[#B3B3B3] min-w-[55%]"></div>
        <h1 className="font-bold text-5xl pb-4 text-center">Worldwide Rating</h1>
        <p>Our Doctors and clinics have earned  over 3,700+Reviews on Google!</p>
        <div className="my-3"><Ratings /></div>
        <p className="text-[rgba(10,55,171,0.86)]">Average Google Rating is 4.6</p>
        <div className="border-t-[2px] my-5 border-solid border-[#B3B3B3] min-w-[55%]"></div>
        <h1 className="font-bold text-5xl pt-2 pb-10 text-center">Testimonials</h1>
        <div className={`flex gap-10 pb-5 px-[2rem] ${width && 'flex-col'}`}>
          {testmony.map((test, index)=>(
            <div key={index} className="bg-white rounded-[10px] flex flex-col justify-between gap-5 py-6 px-10" style={{boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.25)'}}>
              <Quotatoins />
              <div className="flex flex-col gap-3">
                <div className="font-semibold text-xl max-w-[14rem] mt-3 leading-7 text-[rgba(0,0,0,0.75)]">{test.message}</div>
                <div className="border-t-[2px] border-solid border-[#B3B3B3] min-w-[55%]"></div>
                <div>
                    <div className="font-bold text-[#2D5196]">{test.sender}</div>
                    <div className="text-[#354C9B]">{test.place}</div>  
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-5xl py-2 text-center">{width ? "What we offer" : "Services we offer"}</h1>
        <p className="text-center text-lg max-w-[35rem] leading-5 text-gray-500">Levitra is responsible for constantly analyzing your health to predict and prevent future diseases and warn for any maldosage</p>
        <div className="flex items-center py-7 gap-10 px-5">
          {!width && <img src={Woman} className="h-[30rem]" alt="womandoctor"/>}
          <div className="flex h-full gap-7">
            {lefts.slice(0,2).map((left, indexs)=>(
              <div key={indexs} className={`flex flex-col gap-5 max-h-full ${indexs === 0 ? "justify-end" : "justify-start"}`}>
                {indexs ===  0 ? lefts.filter((value, index)=> (index === 0 || index===2)).map((left, index)=>(
                  <div className={`${index === 0 ? 'bg-[#E8EFF9]' : "bg-[rgba(142,227,202,0.4)]"} rounded-[20px] flex flex-col gap-[14px] px-5 py-5`} key={index}>
                    <div className='flex items-center justify-center shadowm-md max-w-fit p-2 bg-white rounded-[10px]'>{left.icon}</div>
                    <div className='font-bold text-xl text-[#0D3E9D]'>{left.h1}</div>
                    <div className='max-w-[12rem] font-medium'>{left.p}</div>
                  </div>
                )) : lefts.filter((value, index) => (index === 1 || index === 3)).map((left, index)=>(
                  <div key={index} className={`${index === 1 ? 'bg-[#E8EFF9]' : "bg-[rgba(142,227,202,0.4)]"} rounded-[20px] flex flex-col gap-[14px] px-5 py-5`}>
                    <div className='flex items-center justify-center shadowm-md max-w-fit p-2 bg-white rounded-[10px]'>{left.icon}</div>
                    <div className='font-bold text-[#0D3E9D]'>{left.h1}</div>
                    <div className='max-w-[12rem] font-medium'>{left.p}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bottomer />
    </div>
  )
}
export default Primarycare