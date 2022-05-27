import React, { useEffect, useState, createContext } from 'react'
import back from '../../assets/background.png'
export const Responsive = createContext();
function Hello({ children }) {
  const [width, setWidth] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(null);
  const handleBackground = () =>{
    setBackground(back);
  }
  const yourImage = async(data) => {
      const image = new Image();
      image.addEventListener('load', handleBackground);
      image.src = data;
      image.removeEventListener('load', handleBackground);
      return image.src;
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    });
  })
  useEffect(()=>{
    const loadimge = async () =>{
      setBackground(await yourImage(back));
      setLoading(false)
    }
    loadimge();
  }, [])
  useEffect(() => {
    window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    const ua = navigator.userAgent;
    if ('/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i' === ua) {
      setDevice("tablet");
      setWidth(true)
    }
    if (
      '/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/' === ua) {
      setDevice("mobile");
      setWidth(true);
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        setScroll(true)
      }
      else {
        setScroll(false);
      }
    });
    window.scrollBy({ top: -window.pageYOffset, behavior: 'smooth' })
  }, [])
  return (
    <Responsive.Provider value={{ width, scroll, background, loading, device }}>
      {children}
    </Responsive.Provider>
  )
}
export default Hello