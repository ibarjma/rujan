import { useEffect, useState } from 'react'

export default function Main() {
  return (
    <div>
      <img
        style={{
          position: 'absolute',
          top: '-0.25rem',
          left: '-0.25rem',
          zIndex: '-1',
          width: '40%',
        }}
        src='images/main/forma1.png'
        alt=''
      />
      <div className='relative py-3 max-w-screen-sm lg:max-w-7xl md:max-w-3xl sm:mx-auto'>
        <div class='flex flex-wrap -mx-1 '>
          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p className='blennySpecialYellow lg:text-9xl text-7xl px-8'>
              {' '}
              SMO
            </p>
            <p className='poppinsBold text-lg yellow'>
              {' '}
              SOCIAL MEDIA OPPORTUNITIES
            </p>
            <p className='poppinsSemiBold yellow'>
              Somos una compañia Social Media Opportunities, pensada y diseñada
              para relacionar a creators, marcas y consumidores en un mundo
              lleno de{' '}
              <span className='poppinsBold yellow'>nuevas oportunidades.</span>
            </p>
            <p className='poppinsSemiBold yellow'>
              <span className='poppinsBold yellow'>
                {' '}
                Captamos, formamos y desarrollamos
              </span>{' '}
              creators para transformarse en los mejores representantes de una
              marca o producto.
            </p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <div class='p-4 w-full'>
              <div class='xl:w-96 xl:h-96 lg:w-80 lg:h-80 sm:w-80 sm:h-80 w-80 h-80 m-4 relative'>
                <img
                  className='absolute z-10 object-cover xl:w-96 xl:h-96 lg:w-80 lg:h-80 sm:w-80 sm:h-80 w-80 h-80 rounded-full m-4'
                  src='images/main/main1.jpg'
                  alt=''
                />
                <img
                  style={{
                    top: '-5vw',
                    width: 'auto',
                    height: '140%',
                    right: '-5vw',
                  }}
                  className='absolute xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
                  src='images/main/forma2.png'
                  alt=''
                />
              </div>
            </div>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2 '>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>

          <div class='my-1 w-full px-1  sm:w-1/2'>
            <p>algo</p>
          </div>
        </div>

        {/* imagen por separado */}
      </div>
    </div>
    /* <img
        className='inline xl:w-3/6 xl:h-3/6 lg:w-3/6 lg:h-3/6 sm:w-3/6 sm:h-3/6 w-3/6 h-3/6'
        src='images/main/Recurso 2.png'
        alt=''
      /> */
  )
}
