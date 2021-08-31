import { useEffect, React } from 'react'
import Ticklist from '../components/ticklist'
import Faq from '../components/faq'
import Nosrecomiendan from '../components/school/nosrecomiendan'
import Compromiso from '../components/school/compromiso'
import Online from '../components/school/online'
import Cursos from '../components/school/cursos'
import Buscas from '../components/school/buscas'
export default function School() {
  useEffect(() => {
    document.body.classList.add('root-pink')
  })

  return (
    <>
      {/* fondos */}
      <div className='fondoCeleste1 absolute'></div>
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='poppinsSemiBold text-2xl pt-4 pb-2'>
              {' '}
              <span className='PoppinsBold'> Cursos y Workshops </span> online
              de
            </p>
            <p
              data-aos='zoom-y-out'
              className='blennySpecialYellow pl-4 lg:text-7xl text-5xl pt-8'
            >
              {' '}
              INFLUENCIA DIGITAL
            </p>

            <Ticklist>
              <span className='w-1/2 h-1/2' img='images/school/tick.svg'>
                Feedback Personalizado
              </span>
              <span className='w-1/2 h-1/2' img='images/school/tick.svg'>
                Flexibilidad horaria
              </span>
              <span className='w-1/2 h-1/2' img='images/school/tick.svg'>
                Calidad 100% asegurada
              </span>
            </Ticklist>
            <span className='flex '>
              <img
                className='relative info pr-2'
                src='images/school/info.svg'
                alt=''
              />{' '}
              <span className='italic text-sm'>
                Prueba una clase y si no te gusta te devolvemos el dinero.
              </span>
            </span>

            <span className='flex '>
              <div className='flex justify-center px-4'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-16 whitespace-   nowrap'
                >
                  VER CURSOS
                </button>
              </div>
              <span>
                <div className='flex justify-center px-4'>
                  <button
                    style={{ backgroundColor: '#eb008b' }}
                    className='font-bold py-2 px-4 rounded mt-16 border-solid yellow'
                  >
                    <span className='flex align-items center border-2 border-yellow-500 rounded-md'>
                      <img
                        className='relative info ml-4'
                        src='images/school/info.svg'
                        alt=''
                      />{' '}
                      <span className=''>Tienes dudas? Escríbenos!</span>
                    </span>
                  </button>
                </div>
              </span>
            </span>
          </div>

          <div class='my-1 w-full px-2 sm:px-16 lg:left-0 sm:right-20 sm:relative lg:inline sm:w-1/2 justify-center'>
            <div class='xl:w-96 xl:h-96 lg:w-96 lg:h-96 sm:w-72 w-80 sm:h-72 h-80 w-80 h-80 m-4 relative'>
              <img
                data-aos='zoom-y-out'
                data-aos-delay='150'
                className='absolute z-10 ilus'
                src='images/school/ilus3.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <Nosrecomiendan></Nosrecomiendan>
      <Compromiso></Compromiso>
      <Online></Online>
      <Cursos></Cursos>
      <Buscas></Buscas>
      <Faq></Faq>
    </>
  )
}
