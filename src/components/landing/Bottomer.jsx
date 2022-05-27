import React, { useContext, useState } from 'react'
import Logo from '../../assets/botlogo.png'
import Appstore from '../../icons/Appstore'
import Playstore from '../../icons/Playstore'
import { ChevronRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Responsive } from '../../context/landing/Responsive'
import { bots, contacts } from '../../datas/Landing'

function Bottomer({ one }) {
  const { width } = useContext(Responsive);
  const [drops, setDrops] = useState([]);
  const drop = (index) => {
    let dro = drops.filter((drop) => (drop !== index));
    drops.includes(index) ? setDrops(dro) : setDrops([...drops, index])
  }
  return (
    <div className={`bg-[#020F3D] px-10 min-w-full flex flex-col py-10 gap-14`}>
      <div className={`flex ${width && 'flex-col gap-2'} justify-between`}>
        <div className="flex flex-col items-start gap-10">
          <Link to="/landing/primarycare"><img src={Logo} className="h-[3rem] mb-2" alt="logo" /></Link>
          {!width && <div className={`flex gap-5 ${width && 'flex-col'}`}><Appstore /><Playstore /></div>}
        </div>
        {!width ? bots.map(({ h1, bols }, index) => (
          <div key={index} className={'flex flex-col gap-5'}>
            <h1 className="font-bold text-2xl text-[#C7C3C3]">{h1}</h1>
            <div className="text-white gap-1 flex flex-col text-lg">
              {bols.map((bol, index) => (
                <Link to={`/landing/${bol.toLowerCase()}`} key={index}>{bol}</Link>
              ))}
            </div>
          </div>
        )) :
          bots.map(({ h1, bols }, index) => (
            <div key={index} className={` ${drops.includes(index) ? `h-[${bols.length * 3}rem]` : "h-[2rem]"} duration-500 flex flex-col gap-5 overflow-hidden min-w-full`}>
              <div onClick={() => drop(index)} className="min-w-full cursor-pointer font-bold text-2xl text-[#C7C3C3] flex items-center justify-between"><h1>{h1}</h1><ChevronRight style={!drops.includes(index) ? { transitionDuration: '500ms' } : { transform: 'rotate(90deg)', transitionDuration: '500ms' }} /></div>
              <div className="text-white gap-1 flex flex-col text-lg">
                {bols.map((bol, index) => (
                  <Link to={`/${bol.toLocaleLowerCase()}`} key={index}>{bol}</Link>
                ))}
              </div>
            </div>
          ))
        }
        {width && <div className="flex justify-center pt-5 pb-2"><div className="border-t-2 w-full border-solid border-[gray]"></div></div>}
        <div className={`flex ${!width ? 'flex-col items-start' : 'justify-between items-center'} gap-4`}>
          {contacts.map(({ icon, title, link }, index) => (
            <a key={index} className="flex items-start gap-1 text-white" rel="noreferrer" target="_blank" href={link}>
              <div className="w-[2rem]">{icon}</div>
              {!width && <span className="w-[5rem]">{title}</span>}
            </a>
          ))}
        </div>
      </div>
      {!width && <div className="flex justify-center"><div className="border-t-2 min-w-[90%] border-solid border-[gray]"></div></div>}
      <div className="text-center text-white">&copy; 2022 Levitra Health Ensures. All rights reserved</div>
    </div>
  )
}

export default Bottomer