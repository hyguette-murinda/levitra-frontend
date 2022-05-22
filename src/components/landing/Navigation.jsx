import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Button } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { navs } from '../../datas/Landing'
import { Responsive } from '../../context/landing/Responsive'
function Navigation({ link, title }) {
  const {width, scroll, device} = useContext(Responsive)
useEffect(()=>{
  document.title = title;
},[title]);
const [dropdown, setDropdown] = useState(false);
const drop = () =>{
  setDropdown(true);
}
const notDrop = () =>{
  setDropdown(false)
}
  return (
    <div className={`${(scroll || link !=="primarycare") ? "bg-white shadow-md drop-shadow-md" : "bg-transparent"} z-50 w-full ${! width ? 'px-5' : 'px-2'} duration-500  flex justify-between h-[5rem] items-center fixed`}>
      {width && 
      <div className=" relative">
        {device === "desktop" ? 
        <div className="relative" onMouseEnter={drop} onMouseLeave={notDrop}>
          <Menu className='cursor-pointer' style={{width: '2.5rem', height: '2.5rem'}}/>
          {dropdown &&
           <div className="flex shadow-lg drop-shadow-lg rounded-[10px] flex-col w-[12rem] absolute bg-white ">
            {navs.map((nav, index)=>(
        <Link to={`/landing/${nav.path}`} key={index} className={`font-bold px-3 py-1 hover:text-[white] ${index === 0 && "rounded-t-[10px]"} ${index === navs.length -1 && "rounded-b-[10px]"} hover:bg-[#1a489d] text-xl ${link === nav.path && 'text-[#1a489d]'}`}>{nav.link}</Link>
        ))}
          </div>
          }
        </div> : 
        <div>
          <Menu onClick={drop} style={{width: '2.5rem', height: '2.5rem'}}/>
          {dropdown && 
          <div className="flex shadow-lg drop-shadow-lg rounded-[10px] py-3 flex-col  w-[10rem] gap-3 absolute bg-white">
            {navs.map((nav, index)=>(
           <Link to={`/landing/${nav.path}`} key={index} className={`font-bold px-3 hover:text-[white] hover:bg-[#1a489d] text-xl ${link === nav.path && 'text-[#1a489d]'}`}>{nav.link}</Link>
            ))}
          </div>
          }
        </div>
        }
      </div>
      }
      <Link to="/landing/primarycare"><img alt="logo" src={Logo} className="h-[2.5rem] min-w-[6rem]"/></Link>
      {!width && <div className="flex items-center gap-[1.5rem]">
      {navs.map((nav, index)=>(
        <Link to={`/landing/${nav.path}`} key={index} className={`font-bold text-xl ${link === nav.path && 'text-[#1c1a9d]'}`}>{nav.link}</Link>
        ))}
       <Button variant="contained" style={{background: '#243A86'}}>Get Started</Button>
      </div>}
      {width && <Button style={{backgroundColor: "#243A86", fontSize: "bold"}} variant="contained">Get Started</Button>}
    </div>
  )
}

export default Navigation