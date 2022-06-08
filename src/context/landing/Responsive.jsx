import React, { useEffect, useState, createContext } from 'react'
import background from '../../assets/background.png'
import Woman from '../../assets/womandoc.png'
import Doctors from '../../assets/doctor.png'
import MaleDoctor from '../../assets/doceco.jpg'
export const Responsive = createContext();
function Hello({ children }) {
  const [width, setWidth] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [wid, setWid] = useState(false)
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const [widh, setWidh] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    })
    window.addEventListener('resize', () => {
      window.innerWidth <= 865 ? setWid(true) : setWid(false)
    })
    window.addEventListener('resize', () => {
      window.innerWidth <= 1440 ? setWidh(true) : setWidh(false)
    })
  })
  useEffect(() => {
    window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    window.innerWidth <= 865 ? setWid(true) : setWid(false)
    window.innerWidth <= 1440 ? setWidh(true) : setWidh(false)
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
    var img = new Image();
    img.onload = () => {
      var doctor = new Image();
      doctor.onload = () => {
        var plus = new Image();
        plus.onload = () => {
          var male = new Image();
          male.onload = () => {
            setTimeout(() => { setLoading(false) }, 1000)
          }
          male.src = MaleDoctor;
        }
        plus.src = Doctors;
      }
      doctor.src = Woman;
    }
    img.src = background;
  }, [])

  return (
    <Responsive.Provider value={{ width, wid,widh, loading, scroll, device }}>
      {children}
    </Responsive.Provider>
  )
}
export default Hello