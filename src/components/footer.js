import { Link, useHistory, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import UserContext from '../context/user'

import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'
import Mapa from '../components/mapa'
import OlaFooter from './ola-footer'
export default function Footer() {
  const location = useLocation()
  useEffect(() => {
    let loc = location.pathname
    console.log(loc)
    switch (loc) {
      case '/main':
        break
      case '/brand':
        break
    }
  }, [location])
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
            <OlaFooter location={location.pathname}></OlaFooter>
            <div
              style={{ position: 'relative', top: '10vw', left: '-2.5rem' }}
              className='block px-3 pt-8 w-max relative py-3 max-w-screen-sm lg:max-w-6xl md:max-w-3xl sm:max-w-3xl sm:mx-2 mx-auto'
            >
              <h1
                style={{ color: '#00AEF4' }}
                className='poppinsBold lg:text-5xl md:text-4xl text-center'
              >
                Contactanos!
              </h1>
              <div className='flex justify-between items-center '>
                <img
                  className='p-4 max-h-20 '
                  src='images/footer/tiktok.png'
                ></img>
                <img
                  className='p-4 max-h-20'
                  src='images/footer/instagram.png'
                ></img>
                <img
                  className='p-4 max-h-20'
                  src='images/footer/youtube.png'
                ></img>
                <img
                  className='p-4 max-h-20'
                  src='images/footer/facebook.png'
                ></img>
                <img
                  className='p-4 max-h-20'
                  src='images/footer/twitch.png'
                ></img>
              </div>
              <div className='flex justify-around items-center'>
                <span>
                  {' '}
                  <img
                    className='p-4 max-h-20'
                    src='images/footer/mail.png'
                  ></img>
                </span>
                <span className='poppinsRegular text-xl'>
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
