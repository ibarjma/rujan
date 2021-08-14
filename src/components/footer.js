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
      className='footer '
    >
      <div className='container mx-auto p-5 items-center'>
        <div className='container mx-auto max-w-screen-lg h-full'>
          <div className=''>
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
              style={{ position: 'relative', top: '10vw', left: '-2.5rem' }}
              className='block pt-8 w-max relative py-3 max-w-screen-sm lg:max-w-7xl md:max-w-3xl sm:max-w-3xl sm:mx-2 mx-auto'
            >
              <h1
                style={{ color: '#00AEF4' }}
                className='poppinsBold lg:text-5xl md:text-3xl text-center'
              >
                Contactanos!
              </h1>
              <div className='flex justify-between items-center '>
                <img
                  className='p-4 max-h-xs '
                  src='images/footer/tiktok.png'
                ></img>
                <img
                  className='p-4 max-h-xs'
                  src='images/footer/instagram.png'
                ></img>
                <img
                  className='p-4 max-h-xs'
                  src='images/footer/youtube.png'
                ></img>
                <img
                  className='p-4 max-h-xs'
                  src='images/footer/facebook.png'
                ></img>
                <img
                  className='p-4 max-h-xs'
                  src='images/footer/twitch.png'
                ></img>
              </div>
              <div className='flex justify-around items-center'>
                <span>
                  {' '}
                  <img src='images/footer/mail.png'></img>
                </span>
                <span className='poppinsRegular'>
                  rujanscouter.es@gmail.com
                </span>
              </div>
            </div>
            <div
              style={{
                maxWidth: 'clamp(34rem, 50vw, 69rem)',
                paddingBottom: '0px',
                position: 'relative',
                left: 'clamp(24rem, 100% - 55vw, 29rem)',
              }}
              className='p-4'
            >
              <Mapa />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
