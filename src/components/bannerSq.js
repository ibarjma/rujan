import React from 'react'

const BannerSq = () => {
  return (
    <div>
      <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto mx-2 my-1 px-2 sm:px-16 sm:px-32 px-12 relative pt-2'>
        <div className='cuadradoDesfazado w-full sm:w-full relative'>
          <div className='cuadradoRosita absolute '></div>
          <div className='infos  relative'>
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4 items-center'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/dolar.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4 items-center'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/estrella.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
            <div className='flex z-10'>
              <div className='block'>
                <div className='flex p-4 items-center'>
                  <span className='p-2'>
                    <img
                      className='icon'
                      src='images/school/tutor.svg'
                      alt=''
                    />
                  </span>
                  <span>PRECIO ACCESIBLE</span>
                </div>
                <p className='p-4'>
                  Tenemos un plan de Becas al mérito para les creators que se
                  comprometan con la Escuela y la metodología del curso
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSq
