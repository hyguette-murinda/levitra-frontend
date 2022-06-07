import React, { useContext } from 'react'
import { Responsive } from '../context/landing/Responsive'
import MaleDoctor from "../../assets/doceco.jpg";
function EcoDoctor({ width }) {
  const { wid } = useContext(Responsive);
  return (
      <div className={`max-w-[33rem] ${wid && 'hidden'} min-w-[25rem]`} >
          <MaleDoctor />
      </div>
  )
}
export default EcoDoctor