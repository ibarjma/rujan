import React from 'react'
import Ticklist from './ticklist'

const Curso = ({ category, title, descrip, list }) => {
  return (
    <div className='border-solid yellow curso relative'>
      <div className=' flex justify-end p-4'>
        {/* categoria */}
        <p className='border category px-4'>{category}</p>
      </div>
      <div className='p-4 text-xl'>
        {/* title */}

        {title}
      </div>
      <div>{/* list || descrip */}</div>
      {descrip !== undefined ? (
        <div>
          <div className='p-4 text-md'>{descrip}</div>
          <Ticklist>
            <span img='images/school/chargePink.svg'>{list.charge}</span>
            <span></span>
          </Ticklist>
        </div>
      ) : (
        <div>
          <Ticklist>
            {Object.entries(list).map((element) => (
              <span
                img={
                  element[0] == 'calendar'
                    ? 'images/school/calendar.svg'
                    : element[0] == 'time'
                    ? 'images/school/time.svg'
                    : element[0] == 'charge'
                    ? 'images/school/charge.svg'
                    : ''
                }
              >
                {element[1]}
              </span>
            ))}
          </Ticklist>
        </div>
      )}
      <div className='flex justify-center poppinsBold relative'>
        <button className='buttonCategory p-1 absolute top-0'>
          <span className='p-2'>VER {category}</span>
        </button>
      </div>
    </div>
  )
}

export default Curso
