import React from 'react'
import Ticklist from './ticklist'

const Amodal = ({ fondo, delante }) => {
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
          <Ticklist>
            <span> Eliges el curso o Workshop que quieras hacer.</span>
            <span> Seleccionas la fecha que más te convenga.</span>
            <span sub='*80% de asistencia a las clases en vivo, entrega en tiempo y forma de todos los desafíos y proyecto final. '>
              Te comprometes con los requisitos.
            </span>
            <span>
              ¡Ya puedes inscribirte al curso abonando el 30% del valor!
            </span>
          </Ticklist>
        </div>
      </div>
    </div>
  )
}

export default Amodal
