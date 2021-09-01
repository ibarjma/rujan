import React from 'react'

const Shopstreaming = () => {
  return (
    <>
      {/* fondos */}
      <div className='fondoCeleste1 absolute'></div>
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
                  <button className='font-bold py-2 px-4 rounded mt-16 border-solid yellow'>
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
                src='images/ilus2.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopstreaming
