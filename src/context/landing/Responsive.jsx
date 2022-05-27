import React, { useEffect, useState, createContext } from 'react'
import background from '../../assets/background.png'
import Woman from '../../assets/womandoc.png'
import Doctors from '../../assets/doctor.png'
import MaleDoctor from '../../assets/male.png'
export const Responsive = createContext();
function Hello({ children }) {
  const [width, setWidth] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    var img = new Image();
    img.onload = () => {
      var doctor = new Image();
      doctor.onload = () => {
        var plus = new Image();
        plus.onload = () => {
          var male = new Image();
          male.onload = () => {
            setLoading(false)
          }
          male.src = MaleDoctor;
        }
        plus.src = Doctors;
      }
      doctor.src = Woman;
    }
    img.src = background;
  }, [])
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 970 ? setWidth(true) : setWidth(false);
    })
  })
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
  }, [])

  return (
    <Responsive.Provider value={{ width, loading, scroll, device }}>
      {children}
    </Responsive.Provider>
  )
}
export default Hello