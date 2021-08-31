import React from 'react'
import Ticklist from './ticklist'

const Amodal = ({ fondo, delante, list, title, tick, id }) => {
  return (
    <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
      <div className='cuadradoDesfazado h-full w-full sm:w-full relative'>
        <div
          style={{ backgroundColor: `${fondo}`, height: '100%' }}
          className='cuadradoRosita absolute round'
        ></div>
        <div
          style={{ backgroundColor: `${delante}` }}
          className='relative z-10 round'
        >
          <h1 className='flex justify-center text-3xl poppinsBold p-8'>
            {title}
          </h1>
          <Ticklist>
            {list.map((element, index) => (
              <span
                img={tick}
                key={index}
                sub={
                  id == 1 && index == 2
                    ? '*80% de asistencia a las clases en vivo, entrega en tiempo y forma de todos los desafíos y proyecto final'
                    : ''
                }
              >
                {element}
              </span>
            ))}
          </Ticklist>
        </div>
      </div>
    </div>
  )
}

export default Amodal
