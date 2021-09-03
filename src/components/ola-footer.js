import React from 'react'

const OlaFooter = ({ location }) => {
  switch (location) {
    case '/brand':
      return (
        <img
          style={{
            position: 'absolute',
            top: '-0.3vw',
            left: '-5vw',
            width: '105vw',
            maxWidth: '200%',
          }}
          src='images/footer/footerCeleste.svg'
          alt=''
        />
      )
    case ('/agency', '/shopstreaming', '/about'):
      return (
        <img
          style={{
            position: 'absolute',
            top: '-0.3vw',
            left: '-5vw',
            width: '105vw',
            maxWidth: '200%',
          }}
          src='images/footer/footerCelesteO.svg'
          alt=''
        />
      )
    case '/main':
      return (
        <img
          style={{
            position: 'absolute',
            top: '-0.3vw',
            left: '-5vw',
            width: '105vw',
            maxWidth: '200%',
          }}
          src='images/footer/forrmacheta.svg'
          alt=''
        />
      )
    case '/influencer':
      return (
        <img
          style={{
            position: 'absolute',
            top: '-0.3vw',
            left: '-5vw',
            width: '105vw',
            maxWidth: '200%',
          }}
          src='images/footer/footerCeleste.svg'
          alt=''
        />
      )
    default:
      return (
        <img
          style={{
            position: 'absolute',
            top: '-0.3vw',
            left: '-5vw',
            width: '105vw',
            maxWidth: '200%',
          }}
          src='images/footer/forrmacheta.svg'
          alt=''
        />
      )
  }
}

export default OlaFooter
