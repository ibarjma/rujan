import { useEffect, React } from 'react'

export default function Agency() {
  useEffect(() => {
    document.body.classList.remove('root-pink')
    document.body.classList.add('root-cel')
  })
  return (
    <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
      <div class='flex flex-wrap -mx-1 '>
        <div class='my-1 w-full px-2 sm:px-16  '>
          <div class='flex flex-wrap mx-1 place-content-center'>
            <div
              key='1'
              class='my-1 w-full px-2 sm:px-16  sm:w-1/2 justify-center'
            >
              <div className='relative'>
                <div className='title poppinsSemiBold yellow text-xl block justify-center relative'>
                  <h1 className='p-4 pl-8 pt-16 blennySpecialPink text-8xl'>
                    {' '}
                    SMO
                  </h1>
                  <div style={{ zIndex: '-2' }} className='absolute top-0 '>
                    <img
                      className='w-3/4 h-3/4'
                      src='images/titlefig-ama.svg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='subtitle pt-8 p-2'>
                  <h6 className='poppinsSemiBold text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quam ab cupiditate velit ratione, dignissimos
                    nostrum itaque voluptate, laudantium in iusto sint quasi
                    praesentium voluptatibus ad quos possimus facilis ipsa.
                  </h6>
                </div>
              </div>

              {/* <div className='button flex justify-center mr-16'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mt-16 whitespace-   nowrap'
                >
                  <a href=''></a>
                </button>
              </div> */}
            </div>
            <div
              key='2'
              class='my-1 w-full px-2 sm:px-16  sm:w-1/2 justify-center'
            >
              <div className='relative'>
                <div className='title  yellow text-xl block justify-center relative'>
                  <h1 className='blennySpecialYellow p-4 pl-8 pt-16 text-8xl'>
                    {' '}
                    SMO
                  </h1>
                  <div style={{ zIndex: '-2' }} className='absolute top-0 '>
                    <img
                      className='w-3/4 h-3/4'
                      src='images/titlefig-pink.svg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='subtitle pt-8 p-2'>
                  <h6 className='poppinsSemiBold text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    consequuntur voluptatem totam quod eum. Adipisci
                    perspiciatis quam soluta numquam deleniti. Corrupti,
                    voluptate. Ab natus alias incidunt officiis explicabo! Quas,
                    magnam?
                  </h6>
                </div>
              </div>

              {/* <div className='button flex justify-center mr-16'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mt-16 whitespace-   nowrap'
                >
                  <a href=''></a>
                </button>
              </div> */}
            </div>
            <div
              key='3'
              class='my-1 w-full px-2 sm:px-16  sm:w-1/2 justify-center'
            >
              <div className='relative'>
                <div className='title poppinsSemiBold yellow text-xl block justify-center relative text-center'>
                  <h1 className='p-4 pl-8 pt-16 blennySpecialYellow text-8xl'>
                    {' '}
                    SMO
                  </h1>
                  <div style={{ zIndex: '-2' }} className='absolute top-0 '>
                    <img
                      className='w-3/4 h-3/4'
                      src='images/titlefig-pink.svg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='subtitle pt-8 p-2'>
                  <h6 className='poppinsSemiBold text-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, modi a. Ducimus, laboriosam placeat? Dolorum excepturi
                    vel minima deleniti voluptatibus alias ea aliquid,
                    dignissimos tempora dolorem eius cupiditate molestiae
                    quibusdam?
                  </h6>
                </div>
              </div>

              {/* <div className='button flex justify-center mr-16'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mt-16 whitespace-   nowrap'
                >
                  <a href=''></a>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
