import React from 'react'

const Cita = ({ nombre, rol }) => {
  return (
    <div className='cita relative px-4 py-4 my-4 mx-4'>
      <p className='pink poppinsSemiBold italic px-4 pt-4 text-9xl'> “ </p>
      <p className='poppinsRegular px-2 py-2 mb-8'>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto,
        delectus voluptates, quis facilis quae enim, recusandae aliquam error
        dolor pariatur earum est non voluptatem fugit? Est culpa aperiam quia.{' '}
      </p>
      <p className='poppinsBold px-2 yellow pt-2 '>{nombre}</p>
      <p className='poppinsRegular px-2 yellow pt-2  '>{rol}</p>
      <img
        className='absolute formita-cita object-cover'
        src='images/formita-cita.png'
        alt=''
      />
    </div>
  )
}

export default Cita
