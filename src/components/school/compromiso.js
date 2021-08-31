import React from 'react'
import Amodal from '../amodal'

const Compromiso = () => {
  const listaCompromiso = [
    'Eliges el Curso o Workshop que quieras hacer.',
    'Seleccionas la fecha que más te convenga',
    'Te comprometes con los requisitos',
    '¡Ya puedes inscribirte al curso abonando el 30% del valor!',
  ]
  return (
    <div className='compromiso py-16 relative yellow '>
      <div className='relative px-3  max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <div className='poppinsBold text-2xl'>
              <span>PREMIAMOS TU</span>

              <span style={{ color: '#29abe2' }}> COMPROMISO </span>
              <br></br>
              <div className='items-center flex'>
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
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2 '>
            <span className='poppinsBold yellow text-3xl'>
              ¿CÓMO FUNCIONA LA BECA?
            </span>
            <Amodal
              title='CÓMO FUNCIONA LA BECA'
              fondo='yellow'
              delante='#29abe2'
              list={listaCompromiso}
              tick='images/school/tick.svg'
              id='1'
            ></Amodal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compromiso
