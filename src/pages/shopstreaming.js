import { React, useEffect } from 'react'

const Shopstreaming = () => {
  useEffect(() => {
    document.body.classList.remove('root-cel')
    document.body.classList.remove('root-black')
    document.body.classList.add('root-pink')
  })

  return (
    <>
      {/* fondos */}
      <div className='fondoCeleste2 absolute'></div>
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2'>
            <p className='poppinsSemiBold text-2xl pt-4 '>
              {' '}
              <span className='PoppinsBold pl-2'> QUÉ ES EL </span>
            </p>
            <p className='blennySpecialYellow pl-4 lg:text-5xl text-3xl pt-4'>
              SHOPSTREAMING?
            </p>

            <span className='flex '>
              <p className='poppinsSemiBold yellow text-md pl-2 pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, fuga! Minima mollitia unde dolorem iure libero
                doloremque saepe dignissimos, consequatur perferendis iusto
                architecto, esse facilis quod. Sapiente expedita inventore quod.
              </p>
            </span>

            <span className=' '>
              <div className='poppinsBold yellow text-lg pl-2 pt-4'>
                Cómo funciona?
              </div>
              <div className='poppinsRegular text-sm pl-2 pt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                adipisci corrupti, omnis repellendus dolorem necessitatibus
                molestiae eaque dolor, quod dicta veniam laboriosam nihil
                quaerat sint vero sunt possimus! Porro, enim?
              </div>
              <span>
                <div className='flex justify-center px-4'>
                  {' '}
                  <button className='font-bold py-2 px-4 rounded mt-16 border-solid yellow align-items center border-2 border-yellow-500 rounded-md'>
                    INSCRIBIRME
                  </button>
                  <button className='font-bold py-2 px-4 rounded mt-16 border-solid yellow lign-items center border-2 border-yellow-500 rounded-md'>
                    <span className='flex align-items center '>
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
                src='images/ilus2.svg'
                alt=''
              />
            </div>
          </div>

          <div className='cuadradoDesfazado2 mt-32 w-1/2  relative z-20'>
            <div className='cuadradoceleste2 absolute '></div>
            <div className='block relative cuadradoAmarillito'>
              <div className='poppinsBold text-2xl pt-4 pl-6'>
                Entrá en contacto con nosotros
              </div>

              <div className='flex justify-between px-2 pr-8 items-center '>
                <span>
                  {' '}
                  <img
                    className='p-4 max-h-20'
                    src='images/footer/mail2.png'
                  ></img>
                </span>
                <span className='poppinsBold '>rujanscouter.es@gmail.com</span>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      <section className='fondocel relative bottom-8 z-10'>
        <div className='relative px-3 py-3 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
          <div class='flex flex-wrap -mx-1 '>
            <div class='relative my-1 w-full px-2 sm:px-16 h-64'>
              <p className='relative text-4xl poppinsRegular py-8 flex justify-center pt-32'>
                Marcá una reunión con nuestro equipo.
              </p>
              <div className='relative top-8 flex justify-center'>
                <div className='cuadradoN rounded '></div>
              </div>
              <span className='relative top-4 text-2xl yellow poppinsRegular py-8 flex justify-center mb-32 '>
                <span>VER TÉRMINOS Y CONDICIONES</span>
              </span>
              <div className='absolute flex'></div>
            </div>

            <div class='my-1 w-full px-2 sm:px-16  h-64 sm:w-1/2'>
              <p></p>
            </div>

            <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
              <p></p>
            </div>
            <div class='relative my-1 w-full px-2 sm:px-16 h-64  sm:w-1/2'>
              <p></p>
            </div>
            <div class='my-1 w-full px-2 sm:px-16  h-32 sm:w-1/2'>
              <p></p>
            </div>

            <div class='my-1 w-full px-2 sm:px-16  h-32 sm:w-1/2'>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative'>
        <section className='fondocel2 absolute'></section>
      </section>
    </>
  )
}

export default Shopstreaming
