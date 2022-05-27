import React, { useEffect, useState, createContext } from 'react'
import background from '../../assets/background.png'
export const Responsive = createContext();
function Hello({children}) {
    const [width, setWidth] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [device, setDevice] = useState("desktop");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      var img = new Image();
      img.onload = function () {
        document.getElementById('back').style.backgroundImage = `url(${background})`;
        setLoading(false)
      };
      img.src = background;
    }, [])
    useEffect(()=>{
      window.addEventListener('resize', ()=>{
        window.innerWidth < 970 ? setWidth(true) : setWidth(false);
      })
    })
  useEffect(()=>{ 
    window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    const ua = navigator.userAgent;
    if ('/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i' === ua) {
      setDevice("tablet");
      setWidth(true)
    }
    if (
      '/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/'===ua) {
      setDevice("mobile");
      setWidth(true);
    }
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 100){
        setScroll(true)
      }
      else{
        setScroll(false); 
      }
    });
    window.scrollBy({top: -window.pageYOffset, behavior: 'smooth'})
  },[])
  
  return (
    <Responsive.Provider value={{width,loading, scroll,device}}>
        {children}
    </Responsive.Provider>
  )
}
export default Hello