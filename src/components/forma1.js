import React from 'react'

const Forma1 = ({ location }) => {
  console.log(location)
  switch (location) {
    case ('/main', '/brand'):
      return (
        <div>
          <img
            style={{
              position: 'absolute',
              top: '-0.25rem',
              left: '-0.25rem',
              zIndex: '-1',
              width: '40%',
            }}
            src='images/brand/forma1.png'
            alt=''
          />
        </div>
      )
    case ('/influencer', '/agency'):
      return (
        <div>
          <img
            style={{
              position: 'absolute',
              top: '-0.25rem',
              left: '-0.25rem',
              zIndex: '-1',
              width: '40%',
            }}
            src='images/formaRosa.svg'
            alt=''
          />
        </div>
      )
    default:
      return (
        <div>
          <img
            style={{
              position: 'absolute',
              top: '-0.25rem',
              left: '-0.25rem',
              zIndex: '-1',
              width: '40%',
            }}
            src='images/brand/forma1.png'
            alt=''
          />
        </div>
      )
  }
}

export default Forma1
