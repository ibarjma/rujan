import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/user'

import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'
import Mapa from '../components/mapa'
export default function Footer() {
  return (
    <div
      style={{
        paddingBottom: '0',
        backgroundColor: '#ffff00',
        position: 'relative',
      }}
      className='footer'
    >
      <img
        style={{
          position: 'absolute',
          top: '-0.3vw',
          left: '-6vw',
          width: '105vw',
          maxWidth: '200%',
        }}
        src='images/footer/forma1.png'
        alt=''
      />
      <div
        style={{ position: 'relative', top: '5vw' }}
        className='block w-max relative py-3 max-w-screen-sm lg:max-w-7xl md:max-w-3xl sm:max-w-3xl sm:mx-2 mx-auto'
      >
        <h1
          style={{ color: '#00AEF4' }}
          className='poppinsBold lg:text-5xl md:text-3xl text-center'
        >
          Contactanos!
        </h1>
        <div className='flex justify-between items-center '>
          <img className='p-4' src='images/footer/tiktok.png'></img>
          <img className='p-4' src='images/footer/instagram.png'></img>
          <img className='p-4' src='images/footer/youtube.png'></img>
          <img className='p-4' src='images/footer/facebook.png'></img>
          <img className='p-4' src='images/footer/twitch.png'></img>
        </div>
        <div className='flex justify-around items-center'>
          <span>
            {' '}
            <img src='images/footer/mail.png'></img>
          </span>
          <span className='poppinsRegular'>rujanscouter.es@gmail.com</span>
        </div>
      </div>
      <div
        style={{
          maxWidth: '75%',
          paddingBottom: '0',
          position: 'relative',
          right: 'calc(-20% - 30px)',
        }}
        className='p-4'
      >
        <Mapa />
      </div>
    </div>
  )
}
