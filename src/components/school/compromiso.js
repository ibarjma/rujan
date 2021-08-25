import React from 'react'
import Amodal from '../amodal'

const Compromiso = () => {
  return (
    <div className='compromiso relative yellow '>
      <div className='relative px-3 py-3  max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <div className='poppinsBold'>
              <span>PREMIAMOS TU</span>

              <span> COMPROMISO </span>
              <br></br>
              <div className='self-center flex'>
                <span>CON</span>
                <span className='blenny text-8xl relative top-6'> RUJAN</span>
              </div>
            </div>
            <p>
              Como escuela, valoramos{' '}
              <span className='poppinsBold'>
                {' '}
                una educación humanizada y en valores.
              </span>{' '}
              Es por eso que apostamos a las clases en vivo, busccando de esta
              forma conectar con la individualidad y las necesidades propias de
              cada estudiante comno medio de focalizarnos en su evolución.{' '}
            </p>
            <p className='poppinsBold'>
              {' '}
              Para que sea una espacio inclusivo para todes, también contamos
              con becas.{' '}
            </p>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            ¿COMO FUNCIONA LA BECA?
            <Amodal></Amodal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compromiso