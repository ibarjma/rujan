import React from 'react'
import Amodal from '../amodal'

const Buscas = () => {
  const listaBuscas = [
    'Encuentros personalizados e individuales con profesionales del Marketing   Digital.',
    'Asesoría creativa para tus contenidos.',
    'Análisis profesional de tus métricas.',
    'Estrategias de marketing digital diseñadas para tu marca.',
    'Acceso exclusivo de información sobre las tendencias y hashtags de TikTok.',
    'Entendimiento de cómo funcionan los algoritmps de cada red social.',
    'Compresnón de las pautas y políticas de cada plataforma.',
    'Creación de un Media Kit profesional.',
  ]
  return (
    <div className='buscas'>
      <div className=' relative px-3 py-3 py-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  '>
            <div className='poppinsBold text-md sm:text-3xl justify-center block '>
              <div className='w-full text-center'>
                <span className='poppinsRegular'>
                  Buscas algo que se ajuste a
                </span>{' '}
                <span className='celeste'></span>
              </div>
              <div className='w-full text-center'>
                <span className='poppinsRegular'></span>
                <span className='poppinsBold'>tus necesidades actuales?</span>
              </div>
            </div>
          </div>
          <div class='my-1 w-full px-2 sm:px-16  '>
            <Amodal
              title='Te Presentamos nuestras Mentorías Personalizadas'
              delante='#fbe216'
              fondo='#eb008b'
              list={listaBuscas}
              tick='images/school/tickPink.svg'
              id='2'
            ></Amodal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buscas
