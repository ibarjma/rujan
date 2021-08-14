import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/user'

import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'

import Dropdown from './dropdown'

export default function Header({ toggle }) {
  const history = useHistory()
  const { user } = useContext(UserContext)
  const { firebase } = useContext(FirebaseContext)

  return (
    <header className='container mx-auto flex flex-wrap p-5 flex-col items-center'>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full items-end'>
          {/* logo */}

          <div className='pl-4 text-gray-700 text-center flex items-center cursor-pointer'>
            <h1 className='flex justify-center w-full'>
              <Link to={ROUTES.DASHBOARD} aria-label='Rujan logo'>
                {' '}
                <img
                  src='/images/logo.svg'
                  alt='Rujan'
                  className='mt-2 w-full'
                />
              </Link>
            </h1>
          </div>
          {/* home, login, circle avatar hidden for now */}
          <div className='textx-gray-700 text-center flex items-center align-items hidden'>
            {user ? (
              // FRAGMENT
              <>
                <Link to={ROUTES.DASHBOARD} aria-label='Dashboard'>
                  <svg
                    className='w-8 mr-6 text-black-light cursor-pointer'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                </Link>

                <button
                  type='button'
                  title='Sign Out'
                  onClick={() => {
                    firebase.auth().signOut()
                    history.push(ROUTES.LOGIN)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut()
                      history.push(ROUTES.LOGIN)
                    }
                  }}
                >
                  <svg
                    className='w-8 mr-6 text-black-light cursor-pointer'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                </button>
                <div className='flex items-center cursor-pointer'>
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      alt={`${user.displayName} profile`}
                      src={`/images/avatars/${user.displayName}.jpg`}
                      className='rounded-full h-8 w-8 flex'
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type='button'
                    className='bg-blue-medium font-bold text-sm rounded text-white w-20 h-8'
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type='button'
                    className='font-bold text-sm rounded text-blue-medium w-20 h-8 '
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
          {/* navbar */}
          {/*  menu icon */}
          <div
            className='px-4 cursor-pointer md:hidden text-center flex items-center align-items'
            onClick={toggle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
          <div
            style={{ fontSize: '0.75rem' }}
            className='pr-2 pl-16 poppinsSemiBold text-center flex items-center align-items md:block lg:block lg:whitespace-nowrap hidden'
          >
            <Link className='p-4' to='/'>
              SOY MARCA
            </Link>
            <Link className='p-4' to='/'>
              SOY INFLUENCER
            </Link>
            <Link className='p-4' to='/'>
              RUJAN SCHOOL
            </Link>
            <Link className='p-4' to='/'>
              AGENCIA
            </Link>
            <Link className='p-4' to='/'>
              SHOPSTREAMING
            </Link>
            <Link className='p-4' to='/'>
              QUIENES SOMOS
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
