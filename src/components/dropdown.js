import { React, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Dropdown2 = ({ isOpen, toggle, color }) => {
  console.log(color)
  return (
    <div
      className={
        isOpen
          ? `grid grid-rows-6 text-center items-center poppinsSemiBold nowrap ${color}`
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className='p-4' to='/brand'>
        SOY MARCA
      </Link>
      <Link className='p-4' to='/influencer'>
        SOY INFLUENCER
      </Link>
      <Link className='p-4' to='/school'>
        RUJAN SCHOOL
      </Link>
      <Link className='p-4' to='/agency'>
        AGENCIA
      </Link>
      <Link className='p-4' to='/shopstreaming'>
        SHOPSTREAMING
      </Link>
      <Link className='p-4' to='/about'>
        QUIENES SOMOS
      </Link>
    </div>
  )
}

export default Dropdown2
