import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown2 = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-6 text-center items-center poppinsSemiBold nowrap'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className='p-4' to='/'>
        SOY MARCA
      </Link>
      <Link className='p-4' to='/'>
        SOY INFLUENCER
      </Link>
      <Link className='p-4' to='/'>
        RUJAN SCHOOL
      </Link>
      <Link className='p-4' to='/'>
        AGENCIA
      </Link>
      <Link className='p-4' to='/'>
        SHOPSTREAMING
      </Link>
      <Link className='p-4' to='/'>
        QUIENES SOMOS
      </Link>
    </div>
  )
}

export default Dropdown2
