import { useEffect, useState } from 'react'

export default function Main() {
  return (
    <div>
      <img
        style={{
          position: 'absolute',
          top: '-0.25rem',
          left: '-0.25rem',
          zIndex: '-1',
          width: '40%',
        }}
        src='images/main/forma1.png'
        alt=''
      />
      <p className='blennySpecialYellow lg:text-9xl text-7xl px-8'> SMO</p>
      <p className='poppinsBold text-lg yellow'> SOCIAL MEDIA OPPORTUNITIES</p>
      <p className='poppinsSemiBold yellow'>
        Somos una compañia Social Media Opportunities, pensada y diseñada para
        relacionar a creators, marcas y consumidores en un mundo lleno de{' '}
        <span className='poppinsBold yellow'>nuevas oportunidades.</span>
      </p>
      <p className='poppinsSemiBold yellow'>
        <span className='poppinsBold yellow'>
          {' '}
          Captamos, formamos y desarrollamos
        </span>{' '}
        creators para transformarse en los mejores representantes de una marca o
        producto.
      </p>
      {/* imagen por separado */}
      {/* <img
        className='inline object-cover xl:w-96 xl:h-96 lg:w-80 lg:h-80 sm:w-52 sm:h-52 w-52 h-52 rounded-full'
        src='images/main/main1.jpg'
        alt=''
      /> */}
      <img
        className='inline xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
        src='images/main/Recurso 2.png'
        alt=''
      />
    </div>
  )
}
