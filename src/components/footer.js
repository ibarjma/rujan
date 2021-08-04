import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/user'

import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'
import Mapa from '../components/mapa'
export default function Footer() {
  return (
    <div
      style={{ paddingBottom: '0', backgroundColor: '#ffff00' }}
      className='footer'
    >
      <p>This is some content in sticky footer</p>
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
