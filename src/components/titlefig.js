import React from 'react'
import Ticklist from './ticklist'

const Titlefig = ({ children }) => {
  console.log(children)
  return (
    <div className='relative px-3 py-3 mt-16 max-w-screen-md lg:max-w-6xl md:max-w-5xl sm:mx-auto'>
      <div class='flex flex-wrap mx-1 place-content-center'>
        {children.length !== undefined ? (
          children.map((element) => (
            <div
              key={element.props.id}
              class='my-1 w-full px-2 sm:px-16  sm:w-1/2 justify-center'
            >
              <div className='relative'>
                <div className='title poppinsSemiBold yellow text-xl block justify-center relative'>
                  <h1 className='p-4 pl-8 pt-16'> {element.props.title}</h1>
                  <div style={{ zIndex: '-2' }} className='absolute top-0 '>
                    <img
                      className='w-3/4 h-3/4'
                      src='images/titlefig-cel.svg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='subtitle pt-8 p-2'>
                  <h6>{element.props.descrip}</h6>
                </div>
              </div>
              <div className='links '>
                <Ticklist>
                  {element.props.links.map((element, index) => (
                    <span img='images/school/tick.svg' key={index}>
                      {element}
                    </span>
                  ))}
                </Ticklist>
              </div>
              <div className='button flex justify-center mr-16'>
                <button
                  style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                  className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full mt-16 whitespace-   nowrap'
                >
                  <a href={element.props.href}>{element.props.link}</a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div class='my-1 w-full px-2 sm:px-16  sm:w-1/2 justify-center'>
            <div className='relative'>
              <div className='title poppinsSemiBold yellow text-xl block justify-center relative'>
                <h1 className='p-4 pl-8 pt-16'> {children.props.title}</h1>
                <div style={{ zIndex: '-2' }} className='absolute top-0 '>
                  <img
                    className='w-3/4 h-3/4'
                    src='images/titlefig-cel.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='subtitle pt-8 p-2'>
                <h6>{children.props.descrip}</h6>
              </div>
            </div>
            <div className='links '>
              <Ticklist>
                {children.props.links.map((element) => (
                  <span>{element}</span>
                ))}
              </Ticklist>
            </div>
            <div className='flex justify-center px-4'>
              <button
                style={{ backgroundColor: '#fbe216', color: '#eb008b' }}
                className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-16 whitespace-   nowrap'
              >
                <a href={children.props.href}>{children.props.link}</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Titlefig
