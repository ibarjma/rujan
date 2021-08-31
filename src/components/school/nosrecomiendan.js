import React from 'react'
import BannerSq from '../bannerSq'
import Cita from '../cita'
const Nosrecomiendan = () => {
  return (
    <div className='nosreco relative '>
      <img
        src='images/rosa-w-full_1.svg'
        className='absolute top-0 w-ful rosa-w-full'
        alt=''
      />
      <BannerSq></BannerSq>
      <div className='my-1 w-full px-2 sm:px-16 relative py-8 '>
        <div className='relative md:px-4 px-16'>
          <p className='flex justify-center yellow blenny yellow text-3xl text-center py-8'>
            NUESTRES ESTUDIANTES NOS RECOMIENDAN!
          </p>
        </div>
      </div>

      <div className='my-1 w-full px-2 sm:px-16 relative py-8 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div className='relative block md:flex md:px-4 px-16'>
          <Cita nombre='Lucas Gonzales' rol='Estudiante de'></Cita>
          <Cita nombre='Jorge Gonzales' rol='Estudiante de'></Cita>
          <Cita nombre='Juan Gonzales' rol='CEO de'></Cita>
        </div>
      </div>
    </div>
  )
}

export default Nosrecomiendan
