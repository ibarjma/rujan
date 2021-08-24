import React from 'react'
import Corona from '../utils/corona'

const Manada = () => {
  return (
    <div class='relative my-1 w-full px-2 sm:px-16 mb-32'>
      <section className='fondoNegro'></section>
      <p className='relative text-7xl blenny yellow pt-16 flex justify-center text-center'>
        Sumate a la manada!
      </p>
      <p className='relative text-2xl yellow poppinsSemiBold py-8 flex justify-center'>
        Si eres influencer o quieres ser uno exitoso, esta es tu oportunidad!
      </p>
      <p className='relative text-2xl yellow poppinsBold py-8 flex justify-center'>
        Sé parte del movimiento Rujan, agenda tu horario y participá del
        casting.
      </p>
      <span className='relative text-3xl poppinsSemiBold py-8 flex justify-center'>
        <button
          style={{ backgroundColor: 'rgb(255, 255, 50)' }}
          className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
        >
          INSCRIBITE!
        </button>
      </span>
      <span className='relative text-xl yellow poppinsRegular py-8 flex justify-center'>
        <span>Ver términos y condiciones</span>
      </span>
      <div className='absolute flex'>
        <Corona
          style={{
            position: 'relative',
            top: '-15rem',
            left: '-5rem',
            zIndex: '-1',
          }}
          imagen='c1.jpg'
          color='celeste'
        ></Corona>
        <Corona
          style={{ position: 'relative', top: '-10rem', zIndex: '-1' }}
          imagen='c2.jpg'
          color='rosa'
        ></Corona>
        <Corona
          style={{
            position: 'relative',
            top: '-2rem',
            left: '-17.5rem',
            zIndex: '-1',
          }}
          imagen='c33.jpg'
          color='celeste'
        ></Corona>
        <Corona
          style={{
            position: 'relative',
            top: '-10rem',
            left: '27.5rem',
            zIndex: '-1',
          }}
          imagen='c4.jpg'
          color='rosa'
        ></Corona>
        <Corona
          style={{
            position: 'relative',
            top: '-2rem',
            left: '10rem',
            zIndex: '-1',
          }}
          imagen='c5.jpg'
          color='celeste'
        ></Corona>
      </div>
    </div>
  )
}

export default Manada
