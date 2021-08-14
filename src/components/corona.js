import React from 'react'

const Corona = ({ imagen, color, style }) => {
  return (
    <div style={style} className='relative w-32 h-32'>
      {color == 'celeste' ? (
        <>
          <img
            className='absolute object-cover rounded-full'
            src={`images/main/${imagen}`}
            alt=''
          />
          <img
            className='absolute corona2'
            src='images/main/coronaCeleste.svg'
            alt=''
          />
        </>
      ) : (
        <>
          <img
            className='absolute object-cover rounded-full'
            src={`images/main/${imagen}`}
            alt=''
          />
          <img
            className='absolute corona2'
            src='images/main/coronaRosa.svg'
            alt=''
          />
        </>
      )}
    </div>
  )
}

export default Corona
